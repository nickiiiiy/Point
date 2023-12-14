// делаю мобильную версию меню
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu-list');
const anchors=document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
    anchor.addEventListener("click",function(event){
        event.preventDefault();
        const blockId=anchor.getAttribute('href')
        document.querySelector(''+ blockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}
menuBtn.addEventListener('click',() =>{
    menu.classList.toggle('menu-list--active')
});

$(function(){
    $('.city-slider, .portfolio-slider').slick({
        fade:true,
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});