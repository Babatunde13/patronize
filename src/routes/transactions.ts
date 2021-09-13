import { Router } from 'express'
import { getUserTransactions } from '../controllers/transactions'
import { authUser as authUserMiddleware } from '../middlewares/auth'

const routes = Router()

routes.get('/', authUserMiddleware, getUserTransactions)


export default routes
