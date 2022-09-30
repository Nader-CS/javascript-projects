let input = document.querySelector(".text-input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".text-label");
let counter = 0;
let vowel = ["a", "e", "i", "o", "u"];

btn.addEventListener("click", () => {
  let test = input.value;
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (test[i] == vowel[j]) {
        counter++;
      }
    }
  }
  result.innerHTML = input.value + " has " + counter + " vowels";
  counter = 0;
});
