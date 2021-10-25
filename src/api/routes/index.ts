import { Router } from 'express'
import { createApiKeyAuthMiddleware } from '../middleware/api-key-auth-middleware'
import { asyncHandler } from '../middleware/async-handler'
import healthcheckRouter from './health-check'
const router = Router()
const apiKeyMiddleware = createApiKeyAuthMiddleware('API_KEY_HERE')

router.use('/healthcheck', asyncHandler(healthcheckRouter))

router.use(apiKeyMiddleware)

export default router