require('../services/env')

import Command, { flags } from '@oclif/command'
import chalk from 'chalk'
import * as inquirer from 'inquirer'

import { getPath, PATHS } from '../config/path'
import { open } from '../services/brower'
import { execute } from '../services/terminal'

export default class Serve extends Command {
  static CHOICES: string[] = []
  static description = 'Serve what you need from the menu to get started'

  static flags = {
    all: flags.boolean({
      char: 'a',
      description: 'serve all the dish',
    }),
    dish: flags.string({
      char: 'd',
      description: 'pre-choose a menu'
    })
  }

  /**
   * Create and print the current choices possible for the butler
   */
  displayAndFillMenu() {
    // Reset Choices to avoid duplication
    Serve.CHOICES = []
    // tslint:disable: no-console
    console.log('The Menu™ contains:')
    Object.entries(PATHS).forEach(([root, projects]) => {
      Serve.CHOICES.push(root)
      const names = projects.map(project => project.name)
      console.log(`- ${chalk.cyanBright(root)} (${names})`)
    })
    console.log('\n')
    // tslint:enable: no-console
  }

  /**
   * Handle the choice of dishes and exectute the command affiliated with them
   */
  handler(array: Array<string>) {
    for (let response of array) {
      this.log(`For response of: ${response}`)

      for (let { path, command, browser, name } of getPath(response)) {
        this.log(`${name}: cd ${path}; ${command}`)
        execute(path, command)
        browser && open(browser)
      }
    }

    this.exit(0)
  }

  async run() {
    const { flags } = this.parse(Serve)

    if (flags.all) {
      return this.handler(Serve.CHOICES)
    }

    if (flags.dish) {
      const userDishes = flags.dish.split(',')

      const dishes = userDishes.reduce((memo: Array<string>, dish: string) => {
        Serve.CHOICES.includes(dish) ?
          memo.push(dish) :
          this.error(`${dish} is not in the menu`)
        return memo
      }, [])

      return this.handler(dishes)
    }

    this.displayAndFillMenu()

    let responses: any = await inquirer.prompt([{
      name: 'serve',
      message: 'What is on the menu today, sir ?',
      type: 'checkbox',
      choices: Serve.CHOICES.map(name => name),
    }])

    this.handler(responses.serve)
  }
}
