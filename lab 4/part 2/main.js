const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring the array of image filenames
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declaring the alternative text for each image
const altText = ['Some pic 1 text', 'Some pic 2 text', 'Some pic 3 text', 'Some pic 4 text', 'Some pic 5 text'];

// Looping through images and creating thumbnail elements
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;  // Change main image on thumbnail click
        displayedImage.alt = e.target.alt;  // Update alt text for the main image
    }
}

// Darken/Lighten Button functionality
btn.onclick = function() {
    if (overlay.style.visibility === 'visible') {
        overlay.style.visibility = 'hidden';
    } else {
        overlay.style.visibility = 'visible';
    }
}
