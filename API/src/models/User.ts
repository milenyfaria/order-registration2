export type user = {
    id: string
    email: string
    password: string
}

export interface SignupDTO {
    email: string
    password: string
}

export interface AuthenticationData {
    id: string
}

export interface LoginInputDTO {
    email: string
    password: string
}
