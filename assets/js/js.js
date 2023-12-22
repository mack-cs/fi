// Carousel 1
const $carousel1 = $('#multiCardCarousel1');
const carousel1Options = {
    interval: false
};
const carousel1 = new bootstrap.Carousel($carousel1[0], carousel1Options);

$carousel1.find('.carousel-control-next').on('click', function () {
    const itemsToShow = Math.floor($carousel1.find('.carousel-inner').width() / $carousel1.find('.carousel-item').first().width());
    const maxScrollPosition = $carousel1.find('.carousel-inner')[0].scrollWidth - ($carousel1.find('.carousel-item').width() * itemsToShow);
    let scrollPosition = $carousel1.find('.carousel-inner').scrollLeft();
    if (scrollPosition < maxScrollPosition) {
        scrollPosition += $carousel1.find('.carousel-item').width();
        $carousel1.find('.carousel-inner').animate({
            scrollLeft: scrollPosition
        }, 600);
    }
});

$carousel1.find('.carousel-control-prev').on('click', function () {
    let scrollPosition = $carousel1.find('.carousel-inner').scrollLeft();
    if (scrollPosition > 0) {
        scrollPosition -= $carousel1.find('.carousel-item').width();
        $carousel1.find('.carousel-inner').animate({
            scrollLeft: scrollPosition
        }, 600);
    }
});

// Carousel 2
const $carousel2 = $('#multiCardCarousel2');
const carousel2Options = {
    interval: false
};
const carousel2 = new bootstrap.Carousel($carousel2[0], carousel2Options);

$carousel2.find('.carousel-control-next').on('click', function () {
    const itemsToShow = Math.floor($carousel2.find('.carousel-inner').width() / $carousel2.find('.carousel-item').first().width());
    const maxScrollPosition = $carousel2.find('.carousel-inner')[0].scrollWidth - ($carousel2.find('.carousel-item').width() * itemsToShow);
    let scrollPosition = $carousel2.find('.carousel-inner').scrollLeft();
    if (scrollPosition < maxScrollPosition) {
        scrollPosition += $carousel2.find('.carousel-item').width();
        $carousel2.find('.carousel-inner').animate({
            scrollLeft: scrollPosition
        }, 600);
    }
});

$carousel2.find('.carousel-control-prev').on('click', function () {
    let scrollPosition = $carousel2.find('.carousel-inner').scrollLeft();
    if (scrollPosition > 0) {
        scrollPosition -= $carousel2.find('.carousel-item').width();
        $carousel2.find('.carousel-inner').animate({
            scrollLeft: scrollPosition
        }, 600);
    }
});
