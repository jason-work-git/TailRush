# create-flowbite-react

The easiest way to get started with `flowbite-react` is by using `create-flowbite-react` CLI.

Easily scaffold a `flowbite-react` application using the most popular React frameworks and technologies out there.

## Getting started

Run any of the following commands and answer the command prompt questions:

### Interactive

The CLI will prompt the directory name, what template to use and if it should initialize a new git repository:

#### npm

```bash
npm create flowbite-react@latest
```

#### yarn

```bash
yarn create flowbite-react
```

#### pnpm

```bash
pnpm create flowbite-react@latest
```

#### bun

```bash
bun create flowbite-react@latest
```

### Non-interactive

You can also pass command line arguments to set up a new project non-interactively. See `create-flowbite-react --help`:

```bash
create-flowbite-react <project-directory> [options]
```

```bash
# npm
npm create flowbite-react@latest next-app -- --template nextjs

# yarn
yarn create flowbite-react remix-app --template remix

# pnpm
pnpm create flowbite-react@latest astro-app --template astro

# bun
bun create flowbite-react@latest vite-app --template vite
```

Check out the full list of [official `flowbite-react` template examples](https://github.com/themesberg/flowbite-react-templates).

## Options

| Name                | Description                     |
| ------------------- | ------------------------------- |
| `--template <name>` | Specify your template           |
| `--git`             | Initialize a new git repository |
| `--help` (`-h`)     | Display available flags         |
| `--version` (`-v`)  | Display CLI version             |

## Templates

| \<name>     | Full name        | URL                                                             |
| ----------- | ---------------- | --------------------------------------------------------------- |
| `nextjs`    | Next.js          | https://github.com/themesberg/flowbite-react-template-nextjs    |
| `remix`     | Remix            | https://github.com/themesberg/flowbite-react-template-remix     |
| `astro`     | Astro            | https://github.com/themesberg/flowbite-react-template-astro     |
| `gatsby`    | Gatsby           | https://github.com/themesberg/flowbite-react-template-gatsby    |
| `redwoodjs` | RedwoodJS        | https://github.com/themesberg/flowbite-react-template-redwoodjs |
| `laravel`   | Laravel          | https://github.com/themesberg/flowbite-react-template-laravel   |
| `vite`      | Vite             | https://github.com/themesberg/flowbite-react-template-vite      |
| `parcel`    | Parcel           | https://github.com/themesberg/flowbite-react-template-parcel    |
| `cra`       | Create React App | https://github.com/themesberg/flowbite-react-template-cra       |
