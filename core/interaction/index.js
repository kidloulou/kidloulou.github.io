"use stict"
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const gButton = document.getElementById("g");
    const dButton = document.getElementById("d");

    let currentIndex = 0;

    function showImage(index) {
        const newTransformValue = -index * 100 + "%";
        container.style.transform = `translateX(${newTransformValue})`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % 3;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showImage(currentIndex);
    }

    gButton.addEventListener("click", prevImage);
    dButton.addEventListener("click", nextImage);

    console.log("test");
    console.log("test2");



});


var titre = document.createElement('h2');


titre.textContent = 'Tableau des voitures à vendre';


var conteneurTitre = document.getElementById('conteneurTitre');


conteneurTitre.appendChild(titre);
