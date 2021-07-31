// console.log('Modal-js');
const button= document.querySelector('[data-modal-button]')
// console.log(button);
const modal= document.querySelector('[data-modal]')
// console.log('Click!!!');
const buttonClose=document.querySelector('[data-modal-close]')

button.addEventListener('click',function(){
    modal.classList.remove('hidden')
})


buttonClose.addEventListener('click',function(){
        // console.log('Click on close button');
})