// console.log('tralala');
const button = document.querySelector("#button");
console.log(button);
const content = document.querySelector("#content");
console.log(content);

button.addEventListener("click", function () {
  console.log("click!!!");
  //------------VERSION-1------------------
  //   content.classList.toggle("content-hidden");

  //   if (content.classList.contains("content-hidden")) {
  //     button.textContent = "Open bloc";
  //   } else {
  //     button.textContent = "Close bloc";
  //   }

  //------------VERSION-2-------------
  if (content.classList.toggle("content-hidden")) {
    button.textContent = "Open bloc";
  } else {
    button.textContent = "Close bloc";
  }
});
