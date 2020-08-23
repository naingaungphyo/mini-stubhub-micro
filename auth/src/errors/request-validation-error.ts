import { ValidationError } from 'express-validator' // type

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super()

    // Only because we are extending a build in clasee
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
}
