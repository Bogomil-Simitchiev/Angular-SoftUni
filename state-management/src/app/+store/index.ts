export * from './actions'
export * from './reducers'

export interface IRootState {
    counter: number,
    user: IUserInfo
}

export interface IUserInfo {
    name: string
    age: number
}
