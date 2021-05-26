/* eslint-disable no- */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class AbstractErrorHandler {
  constructor() {
    this.requestStatus = null;
    this.requestFailCode = null;
  }

  accepts(errorObject) {
    if (
      this.requestStatus === errorObject.status &&
      errorObject.failCode &&
      errorObject.failCode === this.requestFailCode
    ) {
      errorObject.handled = true;
      return true;
    }
    return false;
  }

  process(_errorObject, router) {}
}

export default AbstractErrorHandler;

// Classe abstrata serve para definir os metodos e o contrutor que as classes filhas deverão ter
