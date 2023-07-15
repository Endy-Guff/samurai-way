import {instance} from "./commonAPI";
import {ResponseType} from "../types/commonTypes";

export const authAPI = {
    getMe() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string = '') {
        return instance.post<ResponseType<{userId: number}>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}