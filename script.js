/* const preloadImages=[
    './Images/img4.jpg', 
    './Images/img7.jpg',
    './Images/img8.jpg'
]
preloadImages.forEach((image)=>{
    const img= new Image();
    img.src=image;
})
let images = ['./Images/img4.jpg', './Images/img7.jpg', './Images/img8.jpg'];
let currentImageIndex = 0;
let element = document.querySelector('.element');

setInterval(() => {
    element.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}, 10000); // Change every 10 seconds
 */