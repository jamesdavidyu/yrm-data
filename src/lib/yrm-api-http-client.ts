import axios, { Axios, AxiosInstance } from "axios";

interface LoginPayload {
    username: string | null | undefined;
    password: string | null | undefined;
}

export const getYrmApiHttpClient = (accessToken?: string) => {
    const instance: AxiosInstance = axios.create({
        baseURL: "http://127.0.0.1:8000",
        timeout: 18000,
        headers: {
            ...(accessToken ? { Authorization: `${accessToken}`} : {})
        },
    });
    const client = new YrmApiHttpClient(instance);

    return client;
};

class YrmApiHttpClient {
    constructor(private client: AxiosInstance) {}

    public async loginUser(payload: LoginPayload) {
        const response = await this.client
            .put("/api/v1/auth/login/", payload)
            .catch((e) => {
                throw new Error(e);
            });
        
        return response;
    };
};