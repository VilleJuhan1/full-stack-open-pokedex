# Full Stack open CI/CD

This is a forked repository used for the CI/CD module of the Full stack open course

## Progress

[#####################] 21/21

## Render deployment (exercise 11.10)

[The deployed app](https://full-stack-open-pokedex-z5ph.onrender.com) can be found here. Note: Instead of a dedicated shell script for _npm install_ and _npm build_ I integrated them to the render.yaml file using the '&&' operator which basically executes the latter command only if the former exits with code 0 (success).

## Own deployment (exercise 11.20 and 11.21)

As requested, I took an earlier course project, namely the Countries app from [part 2](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20). However I completely revamped the app and made a game out of it for guessing the flags of the countries. The repository can be found here: [The flag game](https://github.com/VilleJuhan1/Fullstack-websovelluskehitys-osa11-oma-sovellus).

## Commands

Start by running `npm install` inside the project folder:

```shell
npm install # to install the dependencies

npm start # to run the webpack dev server
npm test # to run tests
npm run eslint # to run eslint
npm run build # to make a production build
npm run start-prod # to run your production build
```
