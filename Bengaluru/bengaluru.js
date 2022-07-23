import {navbar,navfunction} from "../components/navbar.js"
document.getElementById('navbar').innerHTML=navbar()
navfunction()
import {footer,footerfun} from "../components/footer.js"
document.getElementById('footer').innerHTML=footer()
footerfun()
let imgData = [
    "https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-36f0e140-b752-11ec-a762-319bdb0970f2.jpg",
    "https://assetscdn1.paytm.com/images/cinema/bb2--705x750-cbc15240-8a94-11ec-8efd-6d205f33f529.jpg",
    "https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg",
    "https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-b554ee90-cd51-11ec-8d22-2363945d80ef.jpg",
    "https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg",
    "https://assetscdn1.paytm.com/images/cinema/RRR-North-705x750-fd78d9c0-693d-11ec-bbcd-5d122dc4018b.jpg",
  ];
  let i = 0;
  slide_Show();
  function slide_Show() {
    let container1 = document.querySelector("#sh-thirdbox");
    setInterval(function () {
      if (i === imgData.length) {
        i = 0;
      }
      let img = document.createElement("img");
      img.src = imgData[i];
      container1.innerHTML = null;
      container1.append(img);
      i++;
    }, 5000);
  }