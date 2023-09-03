
// fix navbar on top on scroll

const header = document.querySelector('header');

window.addEventListener('scroll',function(){
    if(window.scrollY > 60){
       return header.classList.add('scroll');
    }
    header.classList.remove('scroll');
})

//----------------------------------------------------------------

//mega menu show car list & car picture

const subMenuItem = document.querySelectorAll('.sub-menu-item');
const secondList = document.querySelectorAll('.second-list');
const secondMenuLink = document.querySelectorAll('.second-menu-link');
const menuCarImgBox = document.querySelector('.car-image');
const menuCarImg = document.querySelector('.car-image img');
const subMenu = document.querySelector('.sub-menu');

subMenuItem.forEach((item) => {
    item.addEventListener('click',()=>{
        document.querySelector('.sub-menu-item.active').classList.remove('active');
        item.classList.add('active');


        secondList.forEach((list) => {
            list.classList.add('active');
            if(list.dataset.category !== item.textContent){
                list.classList.remove('active');
            }
            
        })
    })
})

function showCarPicture(e){
    menuCarImg.src = '';
    let liItem = e.target.closest('.second-menu-item');
    let carImageSrc = liItem.querySelector('img').src
    menuCarImgBox.classList.remove('active');
    menuCarImg.src = carImageSrc;
    menuCarImgBox.classList.add('active');
}

secondMenuLink.forEach((link) => {
    link.addEventListener('mousemove',showCarPicture);
    link.addEventListener('mouseleave',() => {
        link.removeEventListener('mousemove',showCarPicture);
    });
}) 

//---------------------------------------------------------------

//sticky filterBox

const filterBox = document.querySelector('.filter-box');

window.addEventListener('scroll',()=>{
    if (window.scrollY > 60){
       return filterBox.classList.add('fix');
    }
    filterBox.classList.remove('fix');
})
