# Next.js CLI

### A powerful CLI to create Next.js templates

###### Version: 1.0.6

I created this tool, because my stack is Nest.js and Next.js, and I wanted to create a CLI tool for Next.js like Nest. Currently works as a standalone package, but I am planning to integrate the official next cli into this tool.

# Documentation

- [Installation](#installation)
- [Quick start](#quick-start)
- [Commands](#commands)

## Installation

```
npm install -g ncli
```

## Quick start

You can create a configuration file to configure the cli.

```
ncli init config
```

The CLI does not require to use the configuration file, but I recommend to configure it per project to configure the extension, styling and etc. See the example configuration file [here](examples/example-config.json).

## Commands

- [init](#init)
  - [config](#config)
- [generate](#generate)
  - [module](#module)
  - [page](#page)
  - [layout](#layout)
  - [notfound](#not-found)
  - [error](#error)
  - [loading](#loading)
  - [route](#route)
  - [middleware](#middleware)

### Init

#### Config

Initialize configuration file

### Generate

Generate Next.js templates, in every subcommand you have to specify a path and also you can specify extension, if you specify it in the command line, the configuration file arguments will be overriden. <br>
If you want to use typescript, specify <br> <code>--ts</code> flag in command **route** and **middleware** or <br> <code>--tsx</code> in command **module**, **page**, **loading**, **error**, **layout**, **notfound**

#### Module

```
ncli generate module <path>
```

Generate a Next.js module, this includes a page, loading, error, and not found pages, you can also include a layout file, creates a style file for every file.

##### Flags

- `--layout` - create layout file
- `--error`, `--no-error` - create error file
- `--loading`, `--no-loading` - create loading file
- `--not-found`, `--no-not-found` - create not found file
- `--style`, `--no-style` - specify style files, available options: _css_, _scss_, or if you want to use _tailwind_ specify `--no-style` flag, you can also specify `--scss` flag to use _scss_ as styling
- `--merge-styles` - create one style file
- `--type` - specify the route type, available options: _default_, _dynamic_, _parallel_, _intercepting_, if you want to create these type of route specify it in the flag, do not use in the path, it gives an error, this can be a **future feature**. <br> You can also specify it with prefixed flags like `--dynamic`, `--parallel`, `--intercepting`
- `--level` - if you use `--intercepting` flag, specify the level of the interception, available options: _0_, _1_, _2_, _root_

#### Page

```
ncli generate page <path>
```

Generate a page file

##### Flags

- `--style`, `--no-style` - see in [module](#module)
- `--type` - see in [module](#module)
- `--level` - see in [module](#module)

#### Layout

```
ncli generate layout <path>
```

Generate a layout file

##### Flags

- `--style`, `--no-style` - see in [module](#module)
- `--type` - see in [module](#module)
- `--level` - see in [module](#module)

#### Error

```
ncli generate error <path>
```

Generate an error file

##### Flags

- `--style`, `--no-style` - see in [module](#module)
- `--type` - see in [module](#module)
- `--level` - see in [module](#module)

#### Loading

```
ncli generate loading <path>
```

Generate an loading file

##### Flags

- `--style`, `--no-style` - see in [module](#module) command
- `--type` - see in [module](#module)
- `--level` - see in [module](#module)

#### Not found

```
ncli generate notfound <path>
```

Generate a not found file

##### Flags

- `--style`, `--no-style` - see in [module](#module) command
- `--type` - see in [module](#module)
- `--level` - see in [module](#module)

#### Route

```
ncli generate route <path>
```

Generate a route file

##### Flags

- `--type` - see in [module](#module), available options: _default_, _dynamic_, flag `--dynamic` is also available
- `--handlers` - List of handlers to create, available options: _GET_, _POST_, _PUT_, _PATCH_, _DELETE_. <br> You can also specify `--GET`, `--POST` flags to add these handlers
- `--single-handler` - Create a global handler for route

#### Middleware

```
ncli generate middleware <path>
```

Generate a middleware file

##### Flags

- `--matcher` - specify matcher for the middleware, see the usage [here](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)
- `--global` - make the middleware global

# Feature requests

All feature request is welcome! :D

# Credits

[iamendor](https://github.com/iamendor/iamendor)
