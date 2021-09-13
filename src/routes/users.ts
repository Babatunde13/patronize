import { Router } from 'express'
import { getAuthenticatedUser } from '../controllers/users'
import { authUser as authUserMiddleware } from '../middlewares/auth'

const routes = Router()

routes.get('/', authUserMiddleware, getAuthenticatedUser)


export default routes
