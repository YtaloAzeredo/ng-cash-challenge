export interface DecodeToken {
  decodeToken(token: string): Promise<DecodedData>
}

export type DecodedData = {
  username: string
}
