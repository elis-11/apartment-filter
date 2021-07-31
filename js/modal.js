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

// //-----VERSION-2-------
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
// modal.addEventListener("click", function () {
//   // console.log('Click on close button');
//   modal.classList.add("hidden");

//   modal.querySelector('.modal-window').addEventListener("click", function (e) {

//     console.log(e);
//     e.stopPropagation()
//   })
// });

//-----VERSION-3-------
// to find nessesery elements (Open and Close)
const modalButtons = document.querySelectorAll('[data-modal-button]')
// console.log(modalButtons);
const modalCloseButtons= document.querySelectorAll('[data-modal-close]')

// to open the modal
modalButtons.forEach(function (item){
  item.addEventListener("click", function(){

    const modalId=this.dataset.modalButton
    console.log(modalId);
    
    const modal= document.querySelector('#' + modalId)
    // console.log(modal);
    modal.classList.remove('hidden')
  })
})
//to close modal
modalCloseButtons.forEach(function (item){
  item.addEventListener("click", function (){
   const modal= this.closest('[data-modal]')
  //  console.log(modal );
   modal.classList.add("hidden")
  })
})