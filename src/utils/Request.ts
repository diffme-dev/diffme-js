import axios, { AxiosInstance } from "axios";
import { failure, FailureOrSuccess, success } from "../core";

type Dependencies = {
    domain: string;
    apiKey: string;
};

type RequestParams = {
    route: string;
    query: any;
    data: any;
    headers: any;
};

class Request {
    private readonly domain: string;
    private readonly apiKey: string;
    private readonly client: AxiosInstance;

    constructor({ domain, apiKey }: Dependencies) {
        this.domain = domain;
        this.apiKey = apiKey;
        this.client = axios.create({
            baseURL: domain,
            headers: {
                Authorization: "Bearer " + apiKey,
            },
        });
    }

    getDomain() {
        return this.domain;
    }

    getApiKey() {
        return this.apiKey;
    }

    getHeaders = (headers: any) => {
        return {
            ...headers,
            Authorization: "Bearer " + this.apiKey,
            "Content-Type": "application/json",
        };
    };

    get = async <ResponseT>({
        route,
        headers,
        query,
    }: RequestParams): Promise<FailureOrSuccess<Error, ResponseT>> => {
        try {
            const response = await this.client.get<ResponseT>(route, {
                headers: this.getHeaders(headers),
                params: query,
            });

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };

    patch = async <ResponseT>({
        route,
        headers,
        query,
        data,
    }: RequestParams): Promise<FailureOrSuccess<Error, ResponseT>> => {
        try {
            const response = await this.client.patch<ResponseT>(route, data, {
                headers: this.getHeaders(headers),
                params: query,
            });

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };

    post = async <ResponseT>({
        route,
        headers,
        query,
    }: RequestParams): Promise<FailureOrSuccess<Error, ResponseT>> => {
        try {
            const response = await this.client.post<ResponseT>(route, {
                headers: this.getHeaders(headers),
                params: query,
            });

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };
}

export { Request };
