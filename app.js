const imagePaths = [
    "./pictures/lilman.jpeg",
    "./pictures/cozumel.png",
    "./pictures/17yo.png",
    "./pictures/champ.png",
    "./pictures/banana.png",
    "./pictures/chichill.png",
    "./pictures/flashinlights.png",
    "./pictures/lost.png",
    "./pictures/thug.png",
    "./pictures/black_belt.png",
    "./pictures/hooper.png"

];


function generateImage() {
    const image = document.getElementById("image")
    const imagePath = imagePaths[Math.floor(Math.random()* imagePaths.length)];
    image.src = imagePath;

}