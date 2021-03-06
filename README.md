butler
======

This project is used to quickly launch differents project environment for your dev team.
The idea is to open different tab programmatically against iTerm while setting up path and commands. Currently, it's a MacOS only project.

## Installation

```
yarn;
yarn link; # Install the `butler` command with npm globally
```

## User configuration

All the configuration part will be done inside `config.ts` located at the root of the project. The reasoning behind why it's not simply a JSON file is too let the use of environment variables.
You will need to add the path, the name and the command you wish to use on every project. 
This assumes that all the project are properly set up already.

```typescript
# The default configuration file contains this.

const paths: Paths = {
  projectEnvironmentName: [
    {
      path: '/path/to/directory',
      command: 'launch command',
      browser: 'http://localhost:3000',
      name: 'The project name'
    }
  ]
}

# You can add your projects environment like this:
const paths: Paths = {
  projectA: [
    {
      path: '/project/api',
      command: 'docker-compose up',
      name: 'api'
    },
    {
      path: '/project/client',
      command: 'yarn dev',
      browser: 'http://localhost:5000',
      name: 'client',
    }
  ],
  projectB: [
    {
      path: '/project/rails',
      command: 'bin/rails server',
      browser: 'http://localhost:3000',
      name: 'rails project'
    }
  ]
}
```

# Usage

## Commands

```sh-session
# help
# Print all available commands.
butler help; 

# serve
# Print available projects environments for the user to choose from.
#
# Parameters: 
# -a - Serve all the projects environments without giving prompt.
# -d - Launch a specific project environment without giving prompt.
butler serve;

# config
# Print the path configured for each project environment.
butler config;
```
