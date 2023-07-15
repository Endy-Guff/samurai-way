import * as axios from "axios";

export const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cfa12c32-1348-432a-abcd-90b2663004a3"
    }
});