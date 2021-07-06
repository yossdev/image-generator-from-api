// ! in order for this code to run properly, script.js must be inside the body element before </body>
document.querySelector("#btnGen").addEventListener("click", () => {
  getImageName();
});

let checksum = 0;
let i = 0;

const getImageName = async () => {
  const res = await fetch("/newimagename");
  const data = await res.json();
  i = Math.floor(Math.random() * 10);
  const title = data.results[i].alt_description;
  const imageSrc = data.results[i].urls.small;
  console.log(title, imageSrc);
  checksum += 1;

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
  document.querySelector("body").appendChild(img);
};

// * Start file download.
document.querySelector("#download").addEventListener("click", () => {
  downloadImage();
});

const downloadImage = async () => {
  // * check if there is image displayed
  if (checksum < 1) {
    alert("Generate new image first!");
    return 0;
  }

  const res = await fetch("/downloadimage");
  const data = await res.json();
  const path = data.results[i].links.download;

  window.open(path);
};
