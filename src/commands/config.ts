
const { parsed } = require('../services/env')
const Table = require('cli-table')

import Command from '@oclif/command'
import chalk from 'chalk'

const table = new Table({
  head: [
    chalk.blueBright('key'),
    chalk.blueBright('value')
  ]
})

export default class Config extends Command {
  async run() {
    Object.entries(parsed).forEach(([key, value]) => {
      table.push([key, value])
    })

    this.log(table.toString())
  }
}
