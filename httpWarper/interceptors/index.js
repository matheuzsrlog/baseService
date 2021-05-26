import Request from './request.interceptors'
import Response from './response.interceptors'

class Interceptors {
  constructor() {
    this.request = Request
    this.response = Response
  }
}

export default Interceptors
