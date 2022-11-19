export interface Compare {
  compare(value: string, value2: string): Promise<boolean>
}
