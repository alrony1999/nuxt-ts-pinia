import axios from "axios";

const config = useRuntimeConfig();
const baseUrl = config.public.APP_BASE_URL;
const apiBaseUrl = baseUrl + "/api";

// axios.defaults.withCredentials = true;

export const setAxiosDefaultBearerToken = function (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

function generateUrl(endPoint) {
    const resource = endPoint.replace(/^\/+/, "");
    return `${baseUrl + "/" + resource}`;
}

export const getRequest = async function (endPoint, requiresAuth = true) {

    if (requiresAuth) setAxiosDefaultBearerToken('123');
    let response = {};
    let error = null;
    try {
        response = await axios.get(generateUrl(endPoint));
    } catch (err) {
        error = redirectToSignInIfSessionExpired(err);
    }

    return { response, error };
};

function redirectToSignInIfSessionExpired(error) {
    if (error.response?.status === 401) {
        ElMessage({
            message: "login expired",
        });
        useRouter().push("/");
    }
    return error;
}


// export const getRequest = async function( endPoint,requiresAuth = true) {

//   return 'hi';
// };
