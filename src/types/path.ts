export interface Paths {
  /** The project environment name, it will be displayed when using the serve command */
  [key: string]: Array<{
    /** The absolute path to the folder you wish to execute */
    path: string | undefined,
    /** The command that will be execute inside the path */
    command: string,
    /** If present, this will launch a tab in your browser with the link present inside */
    browser: string | undefined,
    /** The project name that will be displayed inside the project environment when using the serve command */
    name: string
  }>
}