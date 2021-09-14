import { Model } from 'sequelize'
import { hashPassword } from './password'
import User from '../models/user'
import { UserInterface } from './types'

export const createUser = async (data: UserInterface): Promise<Model> => {
    data.password = hashPassword(data.password)
    const user = await User.create({
        email:data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
    })
    return user
}

export const createPaystackCustomer = async (email: string): Promise<any> => {
    console.log(email)
    return 
}

export const findUserById = (id: number): Promise<Model> | null => {
    const user = User.findOne({where: {id}, rejectOnEmpty: false})
    return user
}

export const findUserByEmail = (email: string): Promise<Model> | null => {
    const user = User.findOne({where: {email}, rejectOnEmpty: false})
    return user
}
