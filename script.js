const apikey=`tksTEKuPYwoUdH3QRQ359qnOH84nsp8KlozGYHbEVR4JtulAEZcCPjVM`
const url=`https://api.pexels.com/v1/search?query=`

let populatepics = (query) => { 
fetch(url+query, {
    headers: {
        Authorization: apikey
    }
})
.then(res => res.json())
.then(data => {console.log(data)

    let photos=data.photos
    let newphotos=photos.filter(photos=>photos.width>photos.height)
    

const photoscontainer=document.getElementById("photoscontainer")
photoscontainer.innerHTML=" "

let clearbtn = document.querySelector('.clearbtn')

if(!document.querySelector(".clearbtn")){
let clearbtncontainer=document.getElementById("clearbtncontainer")
let clearbtn=document.createElement("button")
clearbtn.textContent="Clear photos"
clearbtn.classList.add("clearbtn")
clearbtncontainer.appendChild(clearbtn)
clearbtn.style.display="block";
clearbtn.addEventListener("click", () => {
    photoscontainer.innerHTML=" "
    clearbtn.style.display="none"
})
}


for(let i=0; i<newphotos.length; i++){ 
    let eachphoto=newphotos[i];
    console.log(eachphoto);
    clearbtn.style.display="block";

photoscontainer.innerHTML+=`<div class="col-sm-6 col-md-4 col-lg-3">  <img src="${eachphoto.src.medium}" alt="photo" class="w-75 m-3 rounded"> </div>`

let images=document.querySelectorAll("img")
let hoveredimages=images.forEach(photo => {photo.addEventListener("mouseover", () => {
photo.style.transform="scale(1.1)"
})})

let unhoveredimages=images.forEach(photo => {photo.addEventListener("mouseout", () => {
    photo.style.transform="scale(1)"
    })})


}})}


let catsbtn=document.getElementById("cats")
catsbtn.addEventListener("click", () => populatepics("cats"))

let carsbtn=document.getElementById("cars")
carsbtn.addEventListener("click", () => populatepics("cars"))

let tigersbtn=document.getElementById("tigers")
tigersbtn.addEventListener("click", () => populatepics("tigers"))

let candiesbtn=document.getElementById("candies")
candiesbtn.addEventListener("click", () => populatepics("candies"))

let lionsbtn=document.getElementById("lions")
lionsbtn.addEventListener("click", () => populatepics("lions"))


