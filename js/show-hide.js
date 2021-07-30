// console.log('tralala');
const button = document.querySelector("#button");
console.log(button);
const content = document.querySelector("#content");
console.log(content);

button.addEventListener("click", function () {
  console.log("click!!!");

  content.classList.toggle("content-hidden");

  if (content.classList.contains("content-hidden")) {
    button.textContent = "Open bloc";
  } else {
    button.textContent = "Close bloc";
  }
});
