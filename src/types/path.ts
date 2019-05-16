export interface Paths {
  [key: string]: Array<{
    path: string | undefined,
    command: string,
    browser: string | undefined,
    name: string
  }>
}