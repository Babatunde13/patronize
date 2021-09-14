import { hashPassword } from './password'
import User from '../models/user'
import { UserInterface } from './types'

export const createUser = (data: UserInterface): Promise<User> => {
    data.password = hashPassword(data.password)
    const user = User.create({
        email:data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
    })
    return user
}

export const findUserById = (id: number): Promise<User> | null => {
    const user = User.findOne({where: {id}, rejectOnEmpty: false})
    return user
}

export const findUserByEmail = (email: string): Promise<User> | null => {
    const user = User.findOne({where: {email}, rejectOnEmpty: false})
    return user
}
