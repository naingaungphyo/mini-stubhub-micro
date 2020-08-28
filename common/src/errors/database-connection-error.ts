import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connection to database'
  statusCode = 500
  constructor() {
    super('Error connection to db') // logging in server log

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}
