require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// TODO Making Router in NodeJS
// * root route
app.get("/", (req, res) => {
  res.send("HOME!");
});

const api_key = process.env.CLIENT_ID;
const page = Math.floor(Math.random() * 1000);
const limit = Math.floor(page / 10);

// * route to newimage
app.get("/newimagename", async (req, res) => {
  const fetchApi = await fetch(
    `https://api.unsplash.com/search/photos?page=${
      page < 1000 ? page : limit
    }&query=nature&client_id=${api_key}`
  );

  /*
   * the fetch function return a javascript promise
   * that must be convert into json format
   */
  const imageNameResponse = await fetchApi.json();
  // console.log(imageNameResponse);
  res.json(imageNameResponse);
});

// * route to downloadimage
app.get("/downloadimage", async (req, res) => {
  const fetchApi = await fetch(
    `https://api.unsplash.com/search/photos?page=${
      page < 1000 ? page : limit
    }&query=nature&client_id=${api_key}`
  );

  /*
   * the fetch function return a javascript promise
   * that must be convert into json format
   */
  const downloadImageResponse = await fetchApi.json();
  console.log(downloadImageResponse);
  res.json(downloadImageResponse);
});
