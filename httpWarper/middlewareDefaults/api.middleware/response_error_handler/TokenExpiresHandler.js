/* eslint-disable class-methods-use-this */
import AbstractErrorHandler from './AbstractErrorHandler'

class TokenExpiresHandler extends AbstractErrorHandler {
  constructor() {
    super()
    this.requestStatus = 401
    this.requestFailCode = 101
  }

  accepts(errorObject) {
    return errorObject.status === this.requestStatus
  }

  process(_errorObject,) {
    router.push('/login')
  }
}

export default new TokenExpiresHandler()
