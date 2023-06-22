import * as axios from "axios";

const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cfa12c32-1348-432a-abcd-90b2663004a3"
    }
});

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res=>res.data)
    },
    follow(id: number) {
        return instance
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
            .then(res=>res.data)
    },
    unfollow(id: number) {
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(res=>res.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get('auth/me')
            .then(res=>res.data)
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getUser(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(res=>res.data)
    },
    getStatus(userId: string){
        return instance
            .get(`profile/status/${userId}`)
            .then(res=>res.data)
    },
    updateStatus(status: string){
        return instance
            .put(`profile/status`, {status})
            .then(res=>res.data)
    }
}