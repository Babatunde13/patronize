import { createUser as createUserHelper } from './../utils/user.models.helpers'
import { Request, Response } from 'express'
import { ResponseFormat } from '../utils/types'
import User from '../models/user'

export const getAuthenticatedUser = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully fetched user',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}


export const createUser = (req: Request, res: Response): void => {
	console.log(req, res)
	let user
	createUserHelper({
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	}).then(res => { user = res.toJSON() })
	const response: ResponseFormat<User> = {
		data: user,
		message: 'Successfully fetched user',
		status: 'ok',
		errors: ''

	}
	res.status(201).json(response) 
}
