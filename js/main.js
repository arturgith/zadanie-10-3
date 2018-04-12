$(function(){
    //this code will execute after the DOM is loaded
    var $carouselList = $('#carousel ul');
    var $buttonRight = $('.btn-right');
    var $buttonLeft = $('.btn-left');
    //setInterval(changeSlide, 3000);
    function changeSlide() {
        $carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
    }
    function moveFirstSlide() {
        var firstItem = $carouselList.find('li:first');
        var lastItem = $carouselList.find('li:last');
        lastItem.after(firstItem)
        $carouselList.css({marginLeft:-400});
    }
    function changeSlideLeft() {
        $carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
    }
    function moveLastSlide() {
        var firstItem = $carouselList.find('li:first');
        var lastItem = $carouselList.find('li:last');
        firstItem.before(lastItem)
        $carouselList.css({marginLeft:-400});
    }
    $buttonRight.on('click', function() {
        changeSlide();
    })
    $buttonLeft.on('click', function() {
        changeSlideLeft();
    })
    

});