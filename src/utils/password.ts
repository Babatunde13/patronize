import bcrypt from 'bcryptjs'

export const hashPassword = (password: string): string => {
    return bcrypt.hash(password)
}


export const verifyPassword = (password: string): string => {
    return bcrypt.compare(password)
}
