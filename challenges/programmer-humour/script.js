
async function getcartoon() {
try {
const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
const fetchedData = await response.json();
// console.log(fetchedData.img);
return fetchedData.img;
} catch (error) {
console.log(error);
}
} 
//this means Dom, we create thing directly in js.
const cartoonImages = document.createElement("img");
document.body.appendChild(cartoonImages);

//creating another function to allow the
//images to show on webpage//
async function showImages(){
cartoonImages.src = await getcartoon();
}

showImages();