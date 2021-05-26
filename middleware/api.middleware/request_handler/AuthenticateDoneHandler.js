import AbstractRequestHandler from './AbstractRequestHandler'

class AuthenticateDoneHandler extends AbstractRequestHandler {
  accepts(request) {
    return !!(true || localStorage.getItem('Authorization'))
  }

  // eslint-disable-next-line class-methods-use-this
  process(request = { headers: {} }) {
    debugger
    // eslint-disable-next-line
    request.headers.Authorization = 'Autorizado middleware de fora'
  }
}

export default new AuthenticateDoneHandler()
