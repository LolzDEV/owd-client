# Open Web Desktop - Client

<p>
    <img src="https://i.imgur.com/ATQkKQr.png" alt="Open Web Desktop" />
</p>

> An open-source web desktop made with Vue.js

<p>
    <a href="https://github.com/owdproject/owd-client/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/github/release/owdproject/owd-client.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-888" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/discord/520023979595923476.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="Join us on Discord" /></a>
</p>

## Overview
Open Web Desktop (previously *hacklover-client*, aka what is on [my personal website](https://hacklover.net))
is a project that aims to provide a simple environment to create your own web desktop.
Based on Vue.js, it has been rewritten to be fully modular.

[Check the demo](https://owd-client.netlify.app) of this `owd-client` base repository. 

## Features
- Open-source web desktop client based on Vue.js
- Fully extendable through client and server modules
- Fully extendable through pages and components
- Global terminal commands support
- Global notifications through SSE
- Vuetify.js implemented by default
- Responsive support (soon)
- Themes support (soon)

## About this project
Open Web Desktop is splitted in various repositories:
- `owd-client`: Open Web Desktop client, made with Vue.js
- `owd-server`: Open Web Desktop server, made with Nest.js (TBA)
- `owd-cli`: CLI for easy modules installation and maintenance (TBA)

The plans are to make it expandable through a series of modules
that will be released on [GitHub](https://github.com/topics/owd-modules) and Patreon.

## Quick start
Make sure that you have Git, Node.js and npm installed.

- Clone the repo with `git clone https://github.com/owd-project/owd-client`
- Enter the directory with `cd owd-client`
- Install dependencies with `npm install`
- Run your client with `npm run serve`

## Modules
Each OWD module may include a `client` or a `server`
folder. For now, there is no CLI available for modules installation so you should install each module manually.
Here you can find [some modules](https://github.com/topics/owd-modules) available for all.

### Install a new module
You can install modules by copying the content of the `client` module folder into
`src/modules/<module-name>`.

#### Install module dependencies
Some modules may have additional [npm](https://www.npmjs.com) dependencies that you have to install manually.
To do so, check the "dependencies" property in the `src/modules/<module-name>/module.json` configuration.  

Then run `npm install <dependency-name>` for each dependency to install them like every npm module.

#### Define the installed module
To be able to load the installed modules into your OWD client, you have to define them under `config/modules.json`.
Edit that file and be sure to add every module in `modulesEnabled` like in the example:

```json
{
  "type": "client",
  "modulesEnabled": {
    "sample": {
      "name": "sample",
      "version": "1.0.0",
      "url": "https://www.github.com/hacklover/owd-sample"
    },
    "your-module-name": {
      "name": "your-module-name",
      "version": "1.0.0",
      "url": ""
    }
  }
}

```

## Supporters

See all sponsors & backers in the [BACKERS.md](BACKERS.md)

<a href="https://www.patreon.com/hacklover">
    <img src="https://i.imgur.com/KODHUwR.png" width="160" alt="Become a Patron" />
</a>
&nbsp;
<a href="https://www.liberapay.com/hacklover">
    <img src="https://i.imgur.com/tGMNTUz.png" width="160" alt="Become a Patron" />
</a>

## License
This project is released under the [MIT License](LICENSE)