$(document).ready(function () {
    $('.carrousel').slick({
        dots: true,
        prevArrow: '#prev',
        nextArrow: '#next',
        lazyLoad: 'ondemand',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    var products_carousel = ['.best__sellers', '.new__sellers','.discount__sellers'];
    var carousel_counters = ['.pp__counter','.np__counter','.dp__counter']
    products_carousel.forEach(carousel => {
        $(carousel).slick({
            //dots: true,
            prevArrow: carousel+'-prev',
            nextArrow: carousel+'-next',
            lazyLoad: 'ondemand',
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
        var slider = $(carousel);
        if (slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = carousel_counters[products_carousel.indexOf(carousel)]; //$('.slider__counter');
            
            var updateSliderCounter = function (slick, currentIndex) {
                currentSlide = 4 + slick.slickCurrentSlide(); // EDITED THIS
                slidesCount = slick.slideCount;
                if (slidesCount == null) {
                    slidesCount = 20;
                }
                $(sliderCounter).text(currentSlide + ' out of ' + slidesCount)
            };

            slider.on('init', function (event, slick) {
                updateSliderCounter(slick);
            });

            slider.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });
            try {
                slider.slick();
            } catch (error) {
                
            }
            
            
        } 
    });
});