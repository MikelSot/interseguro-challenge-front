import {HttpRequestParam} from "@/common/interfaces/request"
import jsCookie from "js-cookie"
import {TOKEN_NAME} from "@/common/constants/cookies"
import axios, {AxiosResponse} from "axios";

const API_GATEWAY = process.env.API_GATEWAY || 'https://interseguro-challenge-gateway.onrender.com'

class HttpRequest implements HttpRequestParam {
    constructor(
        public https = 'https://',
        public microservice = API_GATEWAY,
        public endpoint = '',
        public headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }
    ) {}

    protected configRequest(param: HttpRequestParam) {
        const {
            headers,
            microservice = API_GATEWAY,
            endpoint,
        } = param

        this.microservice = microservice

        if (headers) this.headers = headers

        this.endpoint = endpoint
    }

    public useToken(token: string) {
        const authorizationToken = token || jsCookie.get(TOKEN_NAME)

        this.headers = {
            ...this.headers,
            ...(authorizationToken && {
                Authorization:authorizationToken,
            }),
        }
    }

    protected urlBuilder() {
        return `${this.https}${this.microservice}/${this.endpoint}`
    }

    protected get<T>(): Promise<AxiosResponse<T>> {
        this.useToken(jsCookie.get(TOKEN_NAME) as string)

        return axios.get(this.urlBuilder(), {
            headers: this.headers,
        })
    }

    protected post<T>(data: unknown): Promise<AxiosResponse<T>> {
        this.useToken(jsCookie.get(TOKEN_NAME) as string)

        return axios.post(this.urlBuilder(), data, {
            headers: this.headers,
        })
    }
}

export default HttpRequest