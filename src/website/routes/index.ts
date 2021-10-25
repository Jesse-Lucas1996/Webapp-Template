import { Router } from 'express'
import healthCheckRouter from './healthcheck'
import { createCookieAuthMiddleware } from '../../api/middleware/cookie-auth-middleware'
import { asyncHandler } from '../../api/middleware'
import authRouter from './auth'


const router = Router()
const cookieAuth = createCookieAuthMiddleware('admin')
router.use('/auth', asyncHandler(authRouter))
router.use(cookieAuth)
router.use('/healthcheckpage', asyncHandler(healthCheckRouter))


export default router
