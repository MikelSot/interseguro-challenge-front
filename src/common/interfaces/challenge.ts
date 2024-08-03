import {QR} from "@/common/interfaces/qr";
import {Statistic} from "@/common/interfaces/statistic";

export interface Challenge {
    data:{
        factorize: QR
        statistic: {
            statistic_q: Statistic
            statistic_r: Statistic
        }
    }
}