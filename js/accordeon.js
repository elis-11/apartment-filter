console.log("tralala");
const headers = document.querySelectorAll("[data-name='accordeon-title']");
// console.log('headers');
//------------VERSION-1-------------
// headers.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("hidden");
//   })
// })
// function showContent(){
// this.nextElementSibling.classList.toggle("hidden");
// }


//------------VERSION-2------NEW----------
headers.forEach(function (item) {
  item.addEventListener("click", showContent);
})
function showContent(){
this.nextElementSibling.classList.toggle("hidden");
}
