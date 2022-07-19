// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

let resImages=['E_MKGs_HR-1 (1).jpg','E_MKGs_HR-2 (1).jpg', 'E_MKGs_HR-2.jpg', 'E_MKGs_HR-3.jpg', 'E_MKGs_HR-3 (1).jpg', 'E_MKGs_HR-6-2.jpg', 'E_MKGs_HR-7.jpg', 'E_MKGs_HR-11.jpg','E_MKGs_LR-10.jpg', 'E_MKGs_LR-9.jpg', 'k3.png']
let comImages=[];
let threeDImages=[];

function loadResImages() {
  for(let i=0;i<resImages.length;i++){
    let img = document.createElement("img")
    img.setAttribute("src",`items/images/${resImages[i]}`);
    img.setAttribute("alt", "residential images");
    img.setAttribute("loading", "lazy");
    img.setAttribute("class", "project-pic")
    document.getElementById('res-parent-div').appendChild(img);
  }
}

function loadComImages() {
  for(let i=0;i<comImages.length;i++){
    let img = document.createElement("img")
    img.setAttribute("src",`items/images/${resImages[i]}`);
    img.setAttribute("alt", "residential images");
    img.setAttribute("loading", "lazy");
    img.setAttribute("class", "project-pic")
    document.getElementById('com-parent-div').appendChild(img);
  }
}

function load3DImages() {

  for(let i=0;i<threeDImages.length;i++){
    let img = document.createElement("img")
    img.setAttribute("src",`items/images/${resImages[i]}`);
    img.setAttribute("alt", "residential images");
    img.setAttribute("loading", "lazy");
    img.setAttribute("class", "project-pic")
    document.getElementById('3d-parent-div').appendChild(img);
  }
}
window.onload = () => {
  (resImages.length > 0) ? loadResImages() : (document.getElementById('res-h2').parentElement.setAttribute('class',"displayh2"));
  (comImages.length > 0) ? loadComImages() : (document.getElementById('com-h2').parentElement.setAttribute('class',"displayh2"));
  (threeDImages.length > 0) ? load3DImages(): (document.getElementById('3d-h2').parentElement.setAttribute('class',"displayh2"));

}