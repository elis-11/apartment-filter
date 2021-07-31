// console.log('tabs!!!!');
// founf all tab-headers for data-atributs
const tabHeaders = document.querySelectorAll("[data-tab]");
console.log(tabHeaders);

tabHeaders.forEach(function (item) {
  // console.log(item)
  item.addEventListener("click", function () {
    // console.log('Tab click!!!');
    // console.log(this);
    console.log(this.dataset.tab);

    const contentBox = document.querySelector("#" + this.dataset.tab);
    console.log(contentBox);
  })
})
