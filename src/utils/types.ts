export interface ResponseFormat<T> {
    status: string,
    data: T,
    message: string,
    errors: string | null
}

export interface UserInterface {
    email: string,
    birthday?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    password: string
}
