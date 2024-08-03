import ApiGateway from "@/common/service/api-gateway";
import {Matrix} from "@/common/interfaces/matrix";

const service = new ApiGateway()

export const login = async (email: string, password: string) => {
    const { data } = await service.login(email, password)

    return data
}

export const challenge = async (matrix: Matrix) => {
    const { data } = await service.challenge(matrix)

    return data
}