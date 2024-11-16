const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* TODO: Declaring the alternative text for each image file */
const altText = ['Some pic 1 text', '', '', '', '']

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgArray[i]);
    newImage.setAttribute('alt', '');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src
        // TODO: altText for each displayedImage
    }
}


// TODO: /* Wiring up the Darken/Lighten button */
