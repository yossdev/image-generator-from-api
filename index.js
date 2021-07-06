require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const api_key = process.env.CLIENT_ID;

// * route to newimage
app.get("/newimagejson", async (req, res) => {
  const fetchApi = await fetch(
    `https://api.unsplash.com/search/photos?query=retro&per_page=30&client_id=${api_key}`
  );

  /*
   * the fetch function return a javascript promise
   * that must be convert into json format
   */
  const imageJsonResponse = await fetchApi.json();
  res.json(imageJsonResponse);
});

// * route to downloadimage
app.get("/downloadimage", async (req, res) => {
  const fetchApi = await fetch(
    `https://api.unsplash.com/search/photos?query=retro&per_page=30&client_id=${api_key}`
  );

  /*
   * the fetch function return a javascript promise
   * that must be convert into json format
   */
  const downloadImageResponse = await fetchApi.json();
  console.log(downloadImageResponse);
  res.json(downloadImageResponse);
});
