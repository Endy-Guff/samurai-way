import {instance} from "./commonAPI";
import {profileType, updateModalType} from "../redux/profileReducer/profileReducer";
import {ResponseType} from "../types/commonTypes";

export const profileAPI = {
    getUser(userId: string) {
        return instance
            .get<profileType>(`profile/${userId}`)
            .then(res=>res.data)
    },
    getStatus(userId: string){
        return instance
            .get<string>(`profile/status/${userId}`)
            .then(res=>res.data)
    },
    updateStatus(status: string){
        return instance
            .put<ResponseType>(`profile/status`, {status})
            .then(res=>res.data)
    },
    savePhoto(file: File){
        const formData = new FormData()
        formData.append('image', file)

        return instance
            .put<ResponseType<{ photos: { small: string, large: string } }>>(`profile/photo`, formData, {headers: {'Content-Type': "multipart/form-data"}})
            .then(res=>res.data)
    },
    updateProfileInfo(profileInfo: updateModalType){
        return instance
            .put<ResponseType>(`profile`, profileInfo)
            .then(res=>res.data)
    }
}