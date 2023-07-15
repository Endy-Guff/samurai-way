import {instance} from "./commonAPI";
import {usersDataType} from "../redux/usersReducer/usersReducer";
import {ResponseType} from "../types/commonTypes";

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance
            .get<{ items: usersDataType[], totalCount: number, error: string } >(`users?count=${pageSize}&page=${currentPage}`)
            .then(res=>res.data)
    },
    follow(id: number) {
        return instance
            .post<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
            .then(res=>res.data)
    },
    unfollow(id: number) {
        return instance
            .delete<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(res=>res.data)
    }
}