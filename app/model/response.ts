export interface IResponse<T> {
    message: string,
    error: boolean,
    data: T
}
