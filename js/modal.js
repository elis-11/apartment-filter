// //-----VERSION-1-------
// // to find nessesery elements (Open and Close)
// const button = document.querySelector("[data-modal-button]");
// // console.log(button);
// const modal = document.querySelector("[data-modal]");
// // console.log('Click!!!');
// const buttonClose = document.querySelector("[data-modal-close]");

// // open modal
// button.addEventListener("click", function () {
//   modal.classList.remove("hidden");
// });

// // close modal
// buttonClose.addEventListener("click", function () {
//   // console.log('Click on close button');
//   modal.classList.add("hidden");

// });

//-----VERSION-1-------
// to find nessesery elements (Open and Close)
const button = document.querySelector("[data-modal-button]");
// console.log(button);
const modal = document.querySelector("[data-modal]");
// console.log('Click!!!');
const buttonClose = document.querySelector("[data-modal-close]");

// open modal
button.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

// close modal
buttonClose.addEventListener("click", function () {
  // console.log('Click on close button');
  modal.classList.add("hidden");

});