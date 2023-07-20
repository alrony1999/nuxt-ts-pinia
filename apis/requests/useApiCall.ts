import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ServerResponse } from "~/types/generics/serverResponse";
import { useAuthStore } from '~/stores/auth'
import { ElMessage } from "element-plus";

const config = useRuntimeConfig();
const baseUrl = config.public.APP_BASE_URL;
const apiBaseUrl = baseUrl + "/api";

// axios.defaults.withCredentials = true;

export const setAxiosDefaultBearerToken = function (token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

function generateUrl(endPoint: string) {
    const resource = endPoint.replace(/^\/+/, "");
    return `${apiBaseUrl + "/" + resource}`;
}

export const getRequest = async <T>(endPoint: string, requiresAuth = true) => {

    if (requiresAuth) setAxiosDefaultBearerToken(useAuthStore().token as string);
    let response = {} as ServerResponse<T>;
    let error = null as null | AxiosError;
    try {
        response = await axios.get(generateUrl(endPoint));
    } catch (err) {
        error = redirectToSignInIfSessionExpired(err as AxiosError);
    }

    return { response, error };
};

export const postRequest = async function <T>(
    endPoint: string,
    data: any,
    requiresAuth = true,
    headers: AxiosRequestConfig = {} as AxiosRequestConfig,
  ) {
    if (requiresAuth) setAxiosDefaultBearerToken(useAuthStore().token as string);
    let response = {} as ServerResponse<T>;
    let error = null as null | AxiosError;
    try {
      response = await axios.post(generateUrl(endPoint), data, headers);
    } catch (er) {
      error = redirectToSignInIfSessionExpired(er as AxiosError);
    }
  
    return { response, error };
  };

function redirectToSignInIfSessionExpired(error: AxiosError) {
    if (error.response?.status === 401) {
        ElMessage({
          message: "login expired",
        });
        useRouter().push("/");
      }
      return error;
}
