let btn = document.querySelector(".main-btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let continer = document.querySelector(".container");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  continer.style.backgroundColor = "#31326f";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  continer.style.backgroundColor = "#005490";
});
