export interface ILoginData {
    _id: string,
    accessToken: string
    email: string,
    password: string,
    username: string
}

export interface IRegisterData {
    email: string,
    password: string,
}
