$(document).ready(function(){
    $('.menu__btn').on('click', function(){
        $('.menu__list-items').toggleClass('menu__list-items--active');
    });

    $('.select').on('click',function(){
        $('.about__menu-list ul').toggleClass('about__menu-list--active')
    });
});
