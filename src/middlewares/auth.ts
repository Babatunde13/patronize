import { Request, Response, NextFunction } from 'express'

export const authUser = (req: Request, res: Response, next: NextFunction): void => {
	console.log(req)
	console.log(res)
	next()
}
