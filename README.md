## Introduction

This codebase contains a simple React Application with code samples, webpack development and production configuration, AJAX calls, React Router 4, Redux, Redux-Thunk, Jest based Test cases for Component, Reducers, Actions, Thunk, Store, JWT Authentication, Dynamic Component Loading, Code Splitting, RxJS & an example shopping cart implementation.

The code base is build from various workshops by Gopalakrishnan at NodeSense, the fine tuning of the code is still in progress. 

## Get Started

- Install Node.js 8.x LTS

> git clone https://github.com/nodesense/react-app

> cd react-app

> npm install

> npm start

The above command start the webpack dev server on default port 8080, if default port is not availble, it may start on 808x port number, check the console for more information.


To build the production bundle, you can use below command

> npm run build


## Restful API Server

To fetch the data from APIs, we need to have restful-server to be available in local machine,
the restful-server is available on https://github.com/nodesense/restful-server

Please follow the instruction to setup restful server. 

If you want to change the end points from 7070 in react app, look into config folder, you can find config/development.json and config/production.json files.


For login page, use below credential

username: admin, password: admin

username: staff, password: staff

username: user, password: user

## Unit Test

We have working unit tests for few of the files, they are stored as filename.spec.js convention. We have test cases included for component, action, thunk, store, mocking fetch responses.

To run the tests,

> npm test

To run tests with coverage

> npm run test-coverage

## Webpack

We have `webpack.config.js', 'webpack.prod.config.js` config files located under same folder, they have vendor bundle, css, configuration 

## TODO
Below works are in merging process, may take some time to complete the merge. 

  Web socket [in progress]
  React Virtualized
  Chart Integration
  

# Setup your own project

## NPM Introduction

Node Package Manager (npm) is installed along with Node.js installation. `npm` command helps to install packages from registry.npmjs.org website. `npm` command install packages on *node_modules* folder on the project directory.

## To create npm project,

> mkdir react-app

> cd react-app

below command creates default *package.json* in your current working directory *react-app*

> npm init -y

## install react packages

on npm 3.x, *--save* option helps to save the install package name in the package dependencies.

> npm install react react-dom prop-types --save

For React-Router,

> npm install react-router-dom --save

For redux,

> npm install redux react-redux redux-thunk --save

For RxJS,

> npm install rxjs --save

For jQuery

> npm install jquery --save

For Fetch (Ajax calls) polyfills

> npm install whatwg-fetch --save


For code splitting, split a modules that can be loaded separately 

> npm install react-loadable  --save

## Babel Setup

Babel is a transpiler, convert ES2016 (ES6), ES2016, ES2017, ES.NEXT to the ES5, the old JavaScript.

> npm install babel-preset-env babel-preset-stage-2 babel-preset-react --save-dev

Create the `.babelrc` in the project root directory

```
{
    "presets": ["env", "stage-2", "react"],
     "plugins": [
        "syntax-dynamic-import"
    ]
} 
```


Few more things with babel setup, when we need support for ES8 async/await keywords [to avoid  regeneratorRuntime issue]

> npm install --save babel-polyfill

Below lines must be added on top of main.js file.

```
import "babel-polyfill";
```

To support code splitting, lazy laod components bundle on need,

> npm install babel-plugin-syntax-dynamic-import --save-dev

## Webpack setup

Webpack bundles many javascripts file into single js file, helps to load files faster in the browser. 

We use src/main.js as an entry file, all files imported within main.js and its sub-files are bundled into app.bundle.js, served from memory. 

> npm install webpack webpack-dev-server babel-core babel-loader --save-dev

Install below plug-ins to handle css entries specific to components on its relative path.

> npm install extract-text-webpack-plugin css-loader file-loader style-loader --save-dev

webpack config files are kept under src/config/webpack.config.js, src/config/webpack.prod.config.js

For production bundle, we need to copy the assets folders (copy-webpack-plugin), generate scripts and link tag dynamically based on hash code (html-webpack-plugin), clear the dist folder for every build (clean-webpack-plugin), For that, we need addtional plug-ins.


> npm install copy-webpack-plugin html-webpack-plugin clean-webpack-plugin --save-dev

## JEST

Jest is a test runner, uses jasmine for test description, comes with all packages pre-installed including test coverage. 

`__mocks__` is useful if you want to mock any files in the system, so that jest can import mock file rather than real project file.

> npm install jest babel-jest enzyme enzyme-adapter-react-16 react-test-renderer --save-dev

to run test cases,

> npm test

to run test cases with code coverage,

> npm run test-coverage

test cases to be stored in `__tests__` folder or stored with extenstion .spec.js or .test.js file in project directory. 