let imagee0=document.getElementById("imagee0");
let image0 = document.getElementById("image0");
let body = document.getElementById("body");
imagee0.onclick = function() {
    body.style.backgroundColor = "yellow" ;
    image0.src = "images/0.png";
}
let image1 =document.getElementById("image1");
image1.onclick =function() {
    body.style.backgroundColor ="blue" ;
    image0.src = "images/1.png";
}
let image2 = document.getElementById("image2");
image2.onclick = function() {
    body.style.backgroundColor ="black" ;
    image0.src = "images/2.png";
}
let image3 = document.getElementById("image3") ;
image3.onclick =function() {
    body.style.backgroundColor ="gray" ;
    image0.src = "images/3.png";
}
let image4 = document.getElementById("image4");
image4.onclick = function() {
    body.style.backgroundColor ="red" ;
    image0.src = "images/4.png";
}
window.onload = function() {
    body.style.backgroundColor ="gray" ;
    image0.src = "images/3.png";
}