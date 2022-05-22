const body = document.body;

const bgArray = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.jpg",
    "img/image6.jpg",
    "img/image7.jpg",
    "img/image8.jpg",
    "img/image9.jpg",
    "img/image10.jpg",
]

function setImage() {
    const chosenImage = bgArray[Math.floor(Math.random() * bgArray.length)];

    const imageElem = document.createElement("img");
    imageElem.src = `${chosenImage}`;
    imageElem.classList.add("bgImg");
    body.appendChild(imageElem);
}

setImage();