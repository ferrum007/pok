

// ___________SLIDER___________

$(document).ready(function() {
     $('#carouselOne').owlCarousel({
         loop:true, //Зацикливаем слайдер
         nav:true, //Отключение навигации
         navText: ["<img src='images/left.png'>", "<img src='images/right.png'>"],
         responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1000:{
                 items:1
             }
         }
     });
});

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});



