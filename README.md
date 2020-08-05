# AmplifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Deploy with a single click

The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more](https://console.amplify.aws). Deploy this app to your AWS account with a single click:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/gsans/aws-amplify-workshop-ui-angular-solution)

The Amplify Console will fork this repo in your GitHub account, and then build and deploy your backend and frontend in a single workflow. Your app will be available at `https://master.APPID.amplifyapp.com`.

## Run locally with the Amplify CLI

1. Install and configure the Amplify CLI

```
  npm install -g @aws-amplify/cli
  amplify configure
```

2. Install and configure the Amplify CLI

```
  amplify init --app https://github.com/gsans/aws-amplify-workshop-ui-angular-solution
```
  
>The init command clones the GitHub repo, initializes the CLI, creates a ‘devone’ environment in CLI, detects and adds categories, provisions the backend, pushes the changes to the cloud, and starts the app.

3. Provisioning the frontend and backend

Once the process is complete, the CLI will automatically open the app in your default browser.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
