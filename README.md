# image-generator-from-api

Learn from Coder Coder (YT)

See Demo: [retro-image-generator](https://yodev-retro-image-generator.herokuapp.com/)

## Set-up

- Setting up package.json
- [nodemon.io](https://nodemon.io/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-fetch](https://www.npmjs.com/package/node-fetch)

## APIs used

- [UnsplashAPIs](https://unsplash.com/developers) Create an .env.local file on the root of the project and put your API key

```
CLIENT_ID=your_api_key_here
```

## Running Locally

You must have your own API from Unsplased

```
$ git clone https://github.com/yossdev/image-generator-from-api.git
$ cd image-generator-from-api
$ npm run dev
```

Your app should now be running on localhost:3000.

## TODO

1. Set up website files and local Express.js site
2. Set up route in Node.js to load API data using fetch()
3. Use asynchronous JavaScript to get JSON data from server-side to client
4. Dynamically generate image tag using JavaScript
5. How to keep your API key secure using dotenv
6. Style the website with CSS

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
