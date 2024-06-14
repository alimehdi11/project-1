let bars = document.querySelector(".bars");
let responsive = document.querySelector(".responsive-nav");
bars.addEventListener("click",()=>{
  responsive.classList.toggle("active");
  bars.children[0].classList.toggle("active");
  bars.children[1].classList.toggle("active");
  bars.children[2].classList.toggle("active");
}) 