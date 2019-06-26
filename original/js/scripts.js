$(document).ready(function(){

    // Check if user is logged into SiteCake
    if (window.sitecakeGlobals && sitecakeGlobals.editMode == true) {

        // Display Modal contents
        $('.modal').addClass('editing-modal');

        // Display Carousel contents
        $('.carousel-inner > .item').show();
    }

    $('.carousel').carousel({
        interval: 10000
    })
});