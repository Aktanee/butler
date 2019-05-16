// tslint:disable: no-http-string
// We disable this rules to get rid of the warning for browser opening

// We assume that the project are already up and running
// The project should always be ready for the command, if not check the
// README of the faulty project
export const PATHS: {
  [key: string]: Array<{
    path: string | undefined,
    command: string,
    browser: string | undefined,
    name: string
  }>
} = {
  default: [
    {
      path: '/path/to/directory',
      command: 'yarn dev',
      browser: 'http://localhost:3000',
      name: 'default project'
    }
  ]
}

export const getPath = (path: string) => PATHS[path]
