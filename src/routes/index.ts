import { Router, Response, Request } from 'express'
import logger from '../middlewares/logger'
import transactions from './transactions'
import users from './users'

const routes = Router()

routes.use(logger)
routes.use('/transactions', transactions)
routes.use('/users/', users)

routes.use('*', (req: Request, res: Response) => {
	res.status(404).json({
		data: null,
		errors: 'The path you made request to does not exist for the used method',
        status: 'bad',
        message: 'not found'
	})
})

export default routes
