import {navbar,navfunction} from "../components/navbar.js"
document.getElementById('navbar').innerHTML=navbar()
navfunction()
// import {footer,footerfun} from "../components/footer.js"
// document.getElementById('footer').innerHTML=footer()
// footerfun()


let i = 0; 			// Start Point
    let images = [];	// Images Array
    let time = 1000;	// Time Between Switch

    images[0] = "1.jpg";
    images[1] = "2.jpg";
    images[2] = "3.jpg";
    images[3] = "4.png";

    console.log(images)
    let container = document.querySelector(".ank_add");
    
    start(images);

function start(images) {
  setInterval(function () {
   if(i >= images.length)
   {
    i=0;
   }
   else{
    container.innerHTML = null;
    let imaa = images[i];

    let im = document.createElement("img");
    im.setAttribute("class", "ank_ads")
    
    im.src=imaa

    container.append(im);

    i++;
   }
    
  },3000);
}


let box = document.getElementById("ank_add2");


start1(images)


function start1(images) {
  setInterval(function () {
   if(i >= images.length)
   {
    i=0;
   }
   else{
    box.innerHTML = null;
    let imaa = images[i];

    let im2 = document.createElement("img");
    im2.setAttribute("class", "ank_ads")
    
    im2.src=imaa

    box.append(im2);

    i++;
   }
    
  },3000);
}