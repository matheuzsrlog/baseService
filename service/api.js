import httpWarper from '@/httpWarper/index'
import middlewares from '@/middleware/api.middleware'

const api = httpWarper.create({
  baseUrl: 'https://api-bootcovides.herokuapp.com',
})

api.interceptors.request.use((request) => {
  middlewares.requestHandlers(request)
  return request
})

// api.interceptors.request.use((request) => {
//   middlewares.responseErrorHandlers(request)
//   return request
// })

export default api
