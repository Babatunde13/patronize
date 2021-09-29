import { Model } from 'sequelize'
import { hashPassword } from './password'
import { UserInterface } from './types'
import User from '../models/user'

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

export const createPaystackCustomer = async (email: string): Promise<UserInterface> => {
    console.log(email)
    return 
}

export const findUserById = async (id: number): Promise<Model> => {
    const user = await User.findOne({where: {id}, rejectOnEmpty: false})
    return user.toJSON() as Model
}

export const findUserByEmail = async (email: string): Promise<Model> => {
    const user = await User.findOne({where: {email}, rejectOnEmpty: false})
    return user.toJSON() as Model
}
