
// fix navbar on top on scroll

const header = document.querySelector('header');

window.addEventListener('scroll',function(){
    if(window.scrollY > 60){
       return header.classList.add('scroll');
    }
    header.classList.remove('scroll');
})
