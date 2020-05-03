$(window).on('load', function () {
    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 340,
            isFitWidth: true
        }
    })
})
