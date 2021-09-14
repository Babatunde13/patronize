import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction): void => {
	console.log({
		type: 'API',
		path: req.path,
		method: req.method,
		date: new Date()
	})
	next()
}
