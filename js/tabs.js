// console.log('tabs!!!!');
// founf all tab-headers for data-atributs
const tabHeaders = document.querySelectorAll("[data-tab]");
console.log(tabHeaders);
// found all contentBoxes
const contentBoxes=document.querySelectorAll('[data-tab-content]');


tabHeaders.forEach(function (item) {
  // console.log(item)
  item.addEventListener("click", function () {
    // console.log('Tab click!!!');
    // console.log(this);
    // console.log(this.dataset.tab);

    const contentBox = document.querySelector("#" + this.dataset.tab);
    // console.log(contentBox);

    // -1- to find the content box
    contentBoxes.forEach(function (item){
        item.classList.add('hidden')
    })


    // -2- to select the content boxand to show it
  })
})
