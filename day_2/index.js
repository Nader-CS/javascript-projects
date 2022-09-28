let random_hex = document.getElementsByClassName("random-hex")[0];
let btn = document.getElementsByClassName("btn")[0];
let copy = document.getElementsByClassName("copyright")[0];
let generate_hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let ran_num;

let hex = "#";

btn.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    ran_num = Math.floor(Math.random() * 16);
    hex += generate_hex[ran_num];
  }
  random_hex.innerHTML = hex;
  document.body.style.backgroundColor = hex;
  copy.style.backgroundColor = hex;
  random_hex.style.color = hex;
  btn.style.backgroundColor = hex;
  hex = "#";
});
