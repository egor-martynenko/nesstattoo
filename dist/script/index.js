let link = document.querySelector(".link");
let pink = document.querySelector(".pink");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {width: "calc(100% + 1.2em)", ease: "Elastic.easeOut(0.25)", duration: 0.5});
hoverTL.to(pink, {width: "2em", left: "calc(100% - 2.5em)", ease: "Elastic.easeOut(0.4)", duration: 0.6});

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
                breakpoint: 500,
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