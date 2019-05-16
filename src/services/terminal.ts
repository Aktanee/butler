const { execSync } = require('child_process')

/**
 * Execute a specific command
 *
 */
export function execute(path: string | undefined, command: string) {
  execSync(`ttab -a iTerm2 -d ${path} '${command};'`)
}
