import {
    postRequest,
    setAxiosDefaultBearerToken,
} from "~/apis/requests/useApiCall";
import { User, UserWithToken } from "~/types";

export const useAuthStore = defineStore("auth", {
    persist: true,
    state: () => ({
        _user: {} as object,
        _isAuthenticated: false,
        _token: null as string | null,
    }),
    getters: {
        user: (state) => state._user,
        token: (state) => state._token,
        isAuthenticated: (state) => state._isAuthenticated,
    },
    actions: {
        async login(loginRequestData: { email: string; password: string }) {
            const { response, error } = await postRequest<UserWithToken>(
                `login`,
                loginRequestData,
            );
            if (!error) {
                return response.data;
            }
            return null;
        },
        async logout() {
            const { response, error } = await postRequest<object>(`logout`,null);
            if (!error) {
                return response.data;
            }
            return null;
        },
        // mutations
        setUser(user: object) {
            this._user = user;
        },
        setBearerToken(token: string) {
            this._token = token;
            setAxiosDefaultBearerToken(token);
        },
        setIsAuthenticated(value: boolean) {
            this._isAuthenticated = value;
        },
    },
});