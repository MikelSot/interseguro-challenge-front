import HttpRequest from "@/common/service/request";
import {AxiosResponse} from "axios";
import {Auth} from "@/common/interfaces/auth";
import {Matrix} from "@/common/interfaces/matrix";
import {Challenge} from "@/common/interfaces/challenge";

export default class ApiGateway extends HttpRequest {
    async login(
        email: string,
        password: string
    ): Promise<AxiosResponse<Auth>> {
        this.configRequest({ endpoint: 'auth/api/v1/login' })

        return await this.post({ email, password })
    }

    async challenge(matrix: Matrix): Promise<AxiosResponse<Challenge>>  {
        this.configRequest({
            endpoint: 'qr/api/v1/challenge',
        })

        return await this.post({ matrix })
    }
}
