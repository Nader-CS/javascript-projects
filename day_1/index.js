let page_buttons = document.getElementsByTagName("button");
let sub_btn = page_buttons[0];
let reset_btn = page_buttons[1];
let add_btn = page_buttons[2];

let counter = document.getElementsByClassName("counter-num")[0];

sub_btn.addEventListener("click", function () {
  counter.innerHTML = Number(counter.innerHTML) - 1;
  white_counter();
  if (Number(counter.innerHTML) < 0) {
    counter.style.color = "yellow";
  }
});

add_btn.addEventListener("click", function () {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  if (Number(counter.innerHTML) > 0) {
    counter.style.color = "orange";
  }
  white_counter();
});

reset_btn.addEventListener("click", function () {
  counter.innerHTML = 0;
  counter.style.color = "white";
});

function white_counter() {
  if (Number(counter.innerHTML) == 0) {
    counter.style.color = "white";
  }
}
