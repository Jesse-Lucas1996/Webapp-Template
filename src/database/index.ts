import { createUserCredentialsRepo } from './repo/user-credentials'

export const repo = {
  credentials: createUserCredentialsRepo(),
}

