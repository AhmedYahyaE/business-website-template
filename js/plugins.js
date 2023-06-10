/*global $, document, console, window*/
$(document).ready(function () {
    'use strict';
    

    // NiceScroll Library
    $("html").niceScroll();



    $(".carousel").carousel({
        interval: 2000
    });

    // Show Color Options Box when clicking on the gear
    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();
    });

    // Change Theme Color on clicking on the gear button
    var colorLi = $('.color-option ul li');

    colorLi
        .eq(0).css('backgroundColor', '#E41B17').end()
        .eq(1).css('backgroundColor', '#E426D5').end()
        .eq(2).css('backgroundColor', '#009AFF').end()
        .eq(3).css('backgroundColor', '#FFD500');

    colorLi.click(function () {
        // console.log($(this).attr('data-value'));
        // console.log($('link[href*="theme"]'));
        $('link[href*="theme"]').attr('href', $(this).attr('data-value')); // CSS [attribute*=value] Selector: https://www.w3schools.com/cssref/sel_attr_contain.php
    });
    
    
    
    // SCROLL TO TOP Button
    var scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        // To show the magnitude of your scrolling in pixels
        console.log($(this).scrollTop());
        /* if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        } */
        // Another way or shorthand for the previous if/else statement
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
        // When clicking on the Scroll Top Button
    scrollButton.click(function () {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    
    
}); // End of Document Ready



// Preloading Screen (outside the document ready) because $(winow).on (load, function....) is equal to the Document Ready
$(window).on('load', function () {
    'use strict';


    // To hide the Preloadin Screen h1
    $('.loading-overlay .spinner').fadeOut(1000, function () {
        // To show the scroll bar
        $('body').css('overflow', 'auto');

        // To hide the Preloading Screen itself
        $(this).parent().fadeOut(2000, function () {
            // To remove the Preloading Section completely from the DOM tree
            $(this).remove();
        });
    });
});