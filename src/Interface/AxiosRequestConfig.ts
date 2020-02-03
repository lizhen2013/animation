import { Method } from '../constant/MethodType'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
}
