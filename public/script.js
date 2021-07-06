// ! in order for this code to run properly, script.js must be inside the body element before </body>
document.querySelector("#gooey-button").addEventListener("click", () => {
  getImageName();
});

let checkCon = 0;
let i = 0;

const index = () => {
  i = Math.floor(Math.random() * 100);
  i = i < 30 ? i : Math.floor(i / 10);
};

const getImageName = async () => {
  const res = await fetch("/newimagejson");
  const data = await res.json();
  index();
  const title = data.results[i].alt_description;
  const imageSrc = data.results[i].urls.small;
  console.log(title, imageSrc);
  checkCon += 1;

  // * Display the title into Browser
  document.querySelector("#title").textContent = title;

  // * Display the img dinamically
  if (document.querySelector("#newImage") !== null) {
    document.querySelector("#newImage").remove();
  }
  const img = document.createElement("img");
  img.id = "newImage";
  img.src = imageSrc;
  img.alt = title;
  document.querySelector(".generator").appendChild(img);
};

// * Start file download.
document.querySelector("#download").addEventListener("click", () => {
  downloadImage();
});

const downloadImage = async () => {
  // * check if there is image displayed
  if (checkCon < 1) {
    alert("Generate new image first!");
    return 0;
  }

  const res = await fetch("/downloadimage");
  const data = await res.json();
  const path = data.results[i].links.download;

  window.open(path);
};
