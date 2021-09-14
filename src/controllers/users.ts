import { Model } from 'sequelize'
import { Request, Response } from 'express'
import { ResponseFormat } from '../utils/types'
import { createUser as createUserHelper } from './../utils/user.models.helpers'

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


export const createUser = (req: Request, res: Response): Response => {
	console.log(req, res)
	const user = createUserHelper({
		email: '',
		password: '',
		firstName: '',
		lastName: ''
	})
	const response: ResponseFormat<Promise<Model>> = {
		data: user,
		message: 'Successfully fetched user',
		status: 'ok',
		errors: ''

	}
	return res.status(201).json(response) 
}
