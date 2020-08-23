export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message) // passing to Error class to output custom error message in server log

    Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeErrors(): { message: string; field?: string }[]
}
