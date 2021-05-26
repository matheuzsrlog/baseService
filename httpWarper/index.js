import Interceptors from './interceptors/index'
import middlewares from './middlewareDefaults/api.middleware'

class WarpHttp {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.interceptors = new Interceptors()
    this.setDefaultsMiddleware()
  }

  setDefaultsMiddleware() {
    this.interceptors.request.use((request) => {
      middlewares.requestHandlers(request)
      return request
    })
  }

  async request({ resource, body, method, headers }) {
    this.interceptors.request.run()

    const url = `${this.baseUrl}/${resource}`

    const response = await fetch(url, { body, headers, method })
    this.interceptors.response.run()
    debugger
    return response.json()
  }

  get(resource, headers = {}) {
    return this.request({ resource, method: 'GET', headers })
  }

  post(resource, body = {}, headers = {}) {
    return this.request({ resource, body, method: 'POST', headers })
  }
}

class Http {
  create({ baseUrl }) {
    return new WarpHttp(baseUrl)
  }
}
export default new Http()
