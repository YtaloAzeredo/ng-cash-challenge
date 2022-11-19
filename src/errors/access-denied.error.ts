export class AcessDeniedError extends Error {
  public statusCode: number
  public message: string
  public name: string

  constructor (message: string = 'Access Denied') {
    super(message)
    this.statusCode = 403
    this.message = message
    this.name = 'AcessDeniedError'
  }
}
