import {navbar,navfunction} from "../components/navbar.js"
document.getElementById('navbar').innerHTML=navbar()
navfunction()
import {footer,footerfun} from "../components/footer.js"
document.getElementById('footer').innerHTML=footer()
footerfun()


let imgData = [
    "https://www.deccanherald.com/sites/dh/themes/deccanherald/images/app_banner_home.jpghttps://www.deccanherald.com/sites/dh/themes/deccanherald/images/app_banner_home.jpg",
    "https://tpc.googlesyndication.com/daca_images/simgad/17548155469939438530",
    "https://tpc.googlesyndication.com/simgad/2343926696959381329",
    "https://static.pbcdn.in/health-cdn/images/prelead/images/offer/senior-citizen.webp",
    "https://s.adroll.com/a/GAB/NXE/GABNXEWZRZHUPIG5N33XBH.jpg",
    "https://tpc.googlesyndication.com/daca_images/simgad/2309045212969808009",
    "https://zem.outbrainimg.com/p/srv/sha/80/c0/b3/e94f147837394f4166e40bc525816e755c.jpg?w=248&h=116&fit=crop&crop=center&fm=jpg"
  ];
  let i = 0;
  slide_Show();
  function slide_Show() {
    let container1 = document.querySelector(".sh-thirdbox");
    setInterval(function () {
      if (i === imgData.length) {
        i = 0;
      }
      let img = document.createElement("img");
      img.src = imgData[i];
      container1.innerHTML = null;
      container1.append(img);
      i++;
    }, 3000);
  }

  let j = 0;
  slide_Show1();
  function slide_Show1() {
    let container1 = document.querySelector("#sh-third");
    setInterval(function () {
      if (j === imgData.length) {
        j = 0;
      }
      let img = document.createElement("img");
      img.src = imgData[j];
      container1.innerHTML = null;
      container1.append(img);
      j++;
    }, 5000);
  }