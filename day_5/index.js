let input = document.querySelector(".text-input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".text-label");

btn.addEventListener("click", () => {
  let bol = isPlaindrom(input.value);
  if (bol) {
    result.innerHTML = input.value + " is a palindrome";
  } else {
    result.innerHTML = input.value + " is NOT a palindrome";
  }
});

function isPlaindrom(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
