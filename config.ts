import { Paths } from './src/types/path'

// tslint:disable: no-http-string
// We disable this rules to get rid of the warning for browser opening

const paths: Paths = {
  default: [
    {
      path: '/path/to/directory',
      command: 'launch command',
      browser: 'http://localhost:3000',
      name: 'project name'
    }
  ]
}

export default paths
