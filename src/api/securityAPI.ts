import {instance} from "./commonAPI";
import {ResponseType} from "../types/commonTypes";

export const securityAPI = {
    getCaptcha(){
        return instance
            .get<ResponseType>('security/get-captcha-url')
    }
}