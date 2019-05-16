butler
======

best butler around here.

This is an util project used to quicly launch projects . 
The main use is the `serve` command that will open a new tab in iTerm with the 
correct project command.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Installation

```
yarn;
yarn link; # Install the `butler` command with npm globally

# config
cp .env.dist .env;
# Modify the .env with the correct path for each repo

# Butler uses
butler help; # give command
butler serve; # -a for all, -d for specifics
butler config; # check the path configured for each repo
```

# Usage
<!-- usage -->
```sh-session
$ yarn link
$ butler COMMAND
running command...
$ butler (-v|--version|version)
butler/0.0.0 linux-x64 node-v10.5.0
$ butler --help [COMMAND]
```
