export class UnauthorizedError extends Error {
  public statusCode: number
  public message: string
  public name: string

  constructor (message: string = 'Unauthorized') {
    super(message)
    this.statusCode = 401
    this.message = message
    this.name = 'Unauthorized'
  }
}
