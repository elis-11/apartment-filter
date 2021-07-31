console.log('tralala');
const headers= document.querySelectorAll('[data-name="accordeon-title"]')
// console.log(headers);

headers.forEach(function(item) {
    // console.log(item);
    item.addEventListener('click', function(){
        // console.log('click!!!'); 
    })
})