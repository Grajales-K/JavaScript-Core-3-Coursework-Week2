let imagesArray = [];
async function getDogImages() {

try {
    const result = await fetch("https://dog.ceo/api/breeds/image/random");
    const resultOfFetch = await result.json();
    // return resultOfFetch;
    const unorderList = document.getElementById("container-photos");
    let listElement = document.createElement('li');
    let onePhoto = document.createElement('img');
    imagesArray.push(resultOfFetch.message);
    onePhoto.src = resultOfFetch.message; //this is calling the img fron message.
    unorderList.appendChild(listElement);
    listElement.appendChild(onePhoto);
} catch (error) {
    console.log(error);
}
}

const previous = document.getElementById("previous");
const next = document.getElementById("next");

previous.addEventListener("click",() => {
    let image = document.querySelector("img");
    console.log(imagesArray);
    image.src = imagesArray.length-1;
})

next.addEventListener("click",() => {
    getDogImages()

});


