import {instance, ResponseType} from "./commonAPI";

export const securityAPI = {
    getCaptcha(){
        return instance
            .get<ResponseType>('security/get-captcha-url')
    }
}