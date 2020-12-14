# Brewery React App

A web app to exercise on react, typescript, eslint, prettier and more

<img src="./public/brewery-react-app.svg" width="25%" alt="svg beer picture">

## Table of contents

- [Sources](#sources)
- [Prior](#prior)
- [Github](#github)
- [Redux Hooks](#redux%20hooks)

## Sources

- REST API
  - openbrewerydb.org: [https://www.openbrewerydb.org] Opensource
- React
  - Material UI: [https://material-ui.com]
  - Axios: [https://github.com/axios/axios]
  - Redux hooks: [https://react-redux.js.org/api/hooks]
- Saga
  - saga basics: [https://www.codementor.io/@rajjeet/step-by-step-how-to-add-redux-saga-to-a-react-redux-app-11xqieyj67]
  - saga typescript: [https://tech.lalilo.com/redux-saga-and-typescript-doing-it-right]

## Prior

- here is tools I will use during this tutorial:
  - iTerm2: [https://www.iterm2.com/downloads.html]
  - XCode from MacOs
  - brew: [https://brew.sh/]
  - `brew update && brew upgrade` (update for already installed packages)
  - NodeJS and Yarn: `brew install nodejs yarn`
  - postman:
    - `brew cask install postman`
- create a repo named "brewery-react-app" on git

## Github

- open iTerm2 and `cd ~ && mkdir Workspace && cd ~/Workspace`
- `yarn init`
- `git clone https://github.com/nicolastrote/brewery-react-app.git && cd brewery-react-app`
- `yarn && yarn start`

## Redux Hooks

- redux-hook connect/dispatch/mapState...: [https://react-redux.js.org/using-react-redux/static-typing]
- redux-hook: [https://medium.com/javascript-in-plain-english/add-redux-to-your-react-app-with-react-hooks-5abb0bff9d7e]
  - 'yarn add redux react-redux'
- redux-devtools with hooks:[https://github.com/zalmoxisus/redux-devtools-extension#usage]
  - 'yarn add redux-devtools-extension'
  
## SAGA

- 'yarn add redux-saga @types/redux-saga redux-logger'
- 'yarn add redux-logger -D'
  - Redux-logger: tool to inspect in console panel triggered actions and state of Redux 
  - We only need it for development that why we add it as a dev-dependency
