// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    //При клике по корневой ссылке в бургер-меню, закрывать меню после прокрутки
    if(iconMenu.classList.contains('menu_icon_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('menu_icon_active');
        menuBody.classList.remove('navigation_active');
    }
  })
}

//Меню бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.navigation');

if(iconMenu){
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('menu_icon_active');
        menuBody.classList.toggle('navigation_active');
    });
}





let link = document.querySelector(".link");
let circle = document.querySelector(".circle");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(circle, {width: "calc(100% + 1.2em)", ease: "Elastic.easeOut(0.25)", duration: 0.5});
hoverTL.to(circle, {width: "2em", left: "calc(100% - 2.5em)", ease: "Elastic.easeOut(0.4)", duration: 0.6});

link.addEventListener("mouseenter", ()=>{
  hoverTL.play();
});

link.addEventListener("mouseleave", ()=>{
  hoverTL.reverse();
});

$(document).ready(function(){
    $('.feedback__group').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    
                }
            }
        ]
    });
    
});




window.addEventListener('DOMContentLoaded', function(){
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});

$(document).ready(function(){
    $('.feedback__group').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive:[
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
    
});
$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 9
});

function myFunction1(smallImg1){
    var fullImg1 = document.getElementById("imageBox1");
    fullImg1.src = smallImg1.src;
}

function myFunction2(smallImg2){
    var fullImg2 = document.getElementById("imageBox2");
    fullImg2.src = smallImg2.src;
}
function myFunction3(smallImg3){
    var fullImg3 = document.getElementById("imageBox3");
    fullImg3.src = smallImg3.src;
}
function myFunction4(smallImg4){
    var fullImg4 = document.getElementById("imageBox4");
    fullImg4.src = smallImg4.src;
}
function myFunction5(smallImg5){
    var fullImg5 = document.getElementById("imageBox5");
    fullImg5.src = smallImg5.src;
}
