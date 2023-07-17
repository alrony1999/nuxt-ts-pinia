import axios, { AxiosError } from "axios";
import { ServerResponse } from "~/types/generics/serverResponse";

const config = useRuntimeConfig();
const baseUrl = config.public.APP_BASE_URL;
const apiBaseUrl = baseUrl + "/api";

// axios.defaults.withCredentials = true;

export const setAxiosDefaultBearerToken = function (token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

function generateUrl(endPoint: string) {
    const resource = endPoint.replace(/^\/+/, "");
    return `${baseUrl + "/" + resource}`;
}

export const getRequest = async <T>(endPoint: string, requiresAuth = true) => {

    if (requiresAuth) setAxiosDefaultBearerToken('123');
    let response = {} as ServerResponse<T>;
    let error = null as null | AxiosError;
    try {
        response = await axios.get(generateUrl(endPoint));
    } catch (err) {
        error = redirectToSignInIfSessionExpired(err as AxiosError);
    }

    return { response, error };
};

function redirectToSignInIfSessionExpired(error: AxiosError) {
    if (error.response?.status === 401) {
        useRouter().push("/");
    }
    return error;
}
