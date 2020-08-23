import { ValidationError } from 'express-validator' // type
import { CustomError } from './custom-error'

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters') // logging in server log

    // Only because we are extending a build in clasee
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param }
    })
  }
}
