$(document).ready(function(){
    $('.slider__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        dots: true,
        // nextArrow:"<button style=' color: red;display: block;font-size: 38px; border: none;background: #F6F6F6;padding-right: 170px;padding-top: 60px;' type='button' class='slick-next pull-right'><i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i></i></button>",
        responsive: [
            
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,        
              dots: true,
             
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true, 
              dots: true,

            }
          },
        ]
    });
  });