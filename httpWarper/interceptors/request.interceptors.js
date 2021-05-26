class Response {
  constructor() {
    this.intercetorsColections = []
  }

  use(intercetor) {
    console.log(intercetor())
    debugger
  }

  run() {
    console.log('request test')
  }
}

export default new Response()
