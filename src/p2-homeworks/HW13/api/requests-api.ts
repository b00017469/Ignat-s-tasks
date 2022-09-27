import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestsAPI = {
    postRequest(checkboxValue: boolean) {
        return instance.post<{succces:boolean}, AxiosResponse>('auth/test', {success: checkboxValue})
    }
}