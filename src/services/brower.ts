const { exec } = require('child_process')

/**
 * Open URL to prefered browser, for OS X
 *
 */
export function open(url: string) {
  // tslint:disable-next-line: no-console
  console.log(`Openning ${url}`)
  exec(`open ${url}`)
}
