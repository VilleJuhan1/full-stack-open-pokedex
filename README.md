# Full Stack open CI/CD

This is a forked repository used for the CI/CD module of the Full stack open course

## Progress (Maybe automated via workflow later?)

[############*********] 12/21

## Render deployment (exercise 11.10)

[The deployed app](https://full-stack-open-pokedex-z5ph.onrender.com) can be found here. Note: Instead of a dedicated shell script for _npm install_ and _npm build_ I integrated them to the render.yaml file using the '&&' operator which basically executes the latter command only if the former exits with code 0 (success).

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
