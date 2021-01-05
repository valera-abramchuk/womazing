


$(function(){

    $('.slider__img-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider',
        dots:false

      });
      $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__img-inner',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        autoplay: false,
        infinity:true
      });
      
      $('.team__img-inner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button  class="slick-prev slick-arrow"><img src="img/icon/arrowsprev.png" alt="prev"></button>',
        nextArrow:'<button  class=" slick-next slick-arrow"><img src="img/icon/arrowsnext.png" alt="next"></button>',
      });

      window.onscroll = function showHeader() {
        var header = document.querySelector('header');
        if(window.pageYOffset > 200){
            header.classList.add('header_fixed');
        } else{
            header.classList.remove('header_fixed');
        }
    };


  
 
});
/* MODAL */
let btnOpen = document.getElementById('btn-open');
let modal = document.getElementById('wrapper-modal');
let btnClose = document.getElementById('btn-close');
let overlay = document.getElementById('overlay');


btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
};

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);
