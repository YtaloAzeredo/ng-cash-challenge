export interface HttpResponse {
  response?: any,
  message?: string
}

export interface HttpRequest {
  query?: any
  params?: any
  body?: any
  headers?: any
}
