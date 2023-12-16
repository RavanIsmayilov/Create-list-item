// fruit lists
var ulElement = document.querySelector(".lists")
const listItem = ["apple", "orange", " pierre", "strowberry", "mango"]

listItem.forEach(listItem => {
    const liElement = document.createElement("li")
    liElement.textContent = listItem;
    ulElement.appendChild(liElement);
});


// crocoder
// var element = document.querySelector(".crocoder");

// const imageElement = document.createElement("img");
// imageElement.src = './assets/indir.png'; 


//     element.appendChild(imageElement);
