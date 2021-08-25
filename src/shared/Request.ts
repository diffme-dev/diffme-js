import axios, { AxiosInstance } from "axios";
import { failure, FailureOrSuccess, success } from "../core";
import * as qs from "query-string";

type Dependencies = {
    domain: string;
    apiKey: string;
    version: string;
};

type RequestParams<QueryT, DataT, HeaderT> = {
    route: string;
    query?: QueryT;
    data?: DataT;
    headers?: HeaderT;
};

class Request {
    private readonly domain: string;
    private readonly apiKey: string;
    private readonly version: string;
    private readonly client: AxiosInstance;

    constructor({ domain, apiKey, version }: Dependencies) {
        this.domain = domain;
        this.apiKey = apiKey;
        this.version = version;
        this.client = axios.create({
            baseURL: domain,
            headers: {
                Authorization: "Bearer " + apiKey,
            },
            paramsSerializer: (params) => {
                return qs.stringify(params);
            },
        });
    }

    getDomain(): string {
        return this.domain;
    }

    getApiKey(): string {
        return this.apiKey;
    }

    getHeaders = <HeaderT>(headers: HeaderT): any => {
        return {
            ...headers,
            Authorization: "Bearer " + this.apiKey,
            "Content-Type": "application/json",
        };
    };

    getRoute = (route: string): string => `${this.version}/${route}`;

    get = async <
        ResponseT,
        QueryT = unknown,
        DataT = unknown,
        HeaderT = unknown
    >({
        route,
        headers,
        query,
    }: RequestParams<QueryT, DataT, HeaderT>): Promise<
        FailureOrSuccess<Error, ResponseT>
    > => {
        try {
            const response = await this.client.get<ResponseT>(
                this.getRoute(route),
                {
                    headers: this.getHeaders(headers),
                    params: query,
                }
            );

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };

    patch = async <
        ResponseT,
        QueryT = unknown,
        DataT = unknown,
        HeaderT = unknown
    >({
        route,
        headers,
        query,
        data,
    }: RequestParams<QueryT, DataT, HeaderT>): Promise<
        FailureOrSuccess<Error, ResponseT>
    > => {
        try {
            const response = await this.client.patch<ResponseT>(
                this.getRoute(route),
                data,
                {
                    headers: this.getHeaders(headers),
                    params: query,
                }
            );

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };

    post = async <
        ResponseT,
        QueryT = unknown,
        DataT = unknown,
        HeaderT = unknown
    >({
        route,
        headers,
        query,
    }: RequestParams<QueryT, DataT, HeaderT>): Promise<
        FailureOrSuccess<Error, ResponseT>
    > => {
        try {
            const response = await this.client.post<ResponseT>(
                this.getRoute(route),
                {
                    headers: this.getHeaders(headers),
                    params: query,
                }
            );

            return success(response.data);
        } catch (err) {
            return failure(err);
        }
    };
}

export { Request };
