import { Request, Response } from 'express'
import { ResponseFormat } from '../utils/types'

export const getUserTransactions = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully fetched users transactions',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}

export const fundAccount = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully funded account',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}


export const sendMoney = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully sent money',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}


export const addBeneficiaries = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully added beneficiaries',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}

export const withdraw = (req: Request, res: Response): void => {
	console.log(req)
	const response: ResponseFormat<{user: {id: ''}}> = {
		data: { user: {id: ''} },
		message: 'Successfully withdrew money',
		status: 'ok',
		errors: ''

	}
	res.json(response)
}

