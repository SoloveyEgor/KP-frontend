$(function(){
    $('.application__wrapper_carousel').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

function f(){
    let a=document.getElementById('height').value;
    var element = document.querySelector('p.price');
    element.textContent = a;
}

