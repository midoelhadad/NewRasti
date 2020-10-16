$(function() {
    $('.carousel').carousel({
        interval: 5000
    });


    'use strict';

    $(window).scroll(function() {

        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 100) {

            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }

    });

    //start OUR SKILL
    $(".animated-progres span").each(function() {

        $(this).animate({

            width: $(this).attr("data-progres") + "%"
        }, 700);

    });

    $(function() {

        "use strict";

        $(".pricicing-table .heden-title .plans .plan").on("click", function() {
            $(this).siblings(".bg-active").css("transform", "translateX(" + $(this).position().left + "px)");
            $(".section-pricing .plans .plan").css("color", "#fff");
            $(this).css("color", "#000");
            if ($(this).hasClass("yearly")) {
                $(".pricicing-table .content .sallry .price").css("opacity", 0);
                $(".pricicing-table .content .sallry .yearly-price").css("opacity", 1);
            } else {
                $(".pricicing-table .content .sallry .price").css("opacity", 0);
                $(".pricicing-table .content .sallry .monthly-price").css("opacity", 1);
            }
        });
    });

    // $('.carousel').carousel()
});





// video box

$(document).ready(function() {

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })

    // Add Active Class On Nav Bar Link And Remove From Siblings

    $('.navbar li a').click (function() {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });



    // navbar links
    $(".navbar li a").click(function(e){

    e.preventDefault();


        $("html, body").animate({

            scrollTop: $("#" + $(this).data('scroll')).offset().top
        },2000);


    });
    // document ready  




    var slideIndex = 0;
    slider();
    function slider() {
        var i;
        var x = document.getElementsByClassName("part");
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("slide");
            x[i].classList.remove("slideOut");
            x[i].className += " slideOut";
        }
        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1
        }
        x[slideIndex - 1].classList.remove("slideOut");
        x[slideIndex - 1].style.display = "inline";
        x[slideIndex - 1].className += " slide";
        setTimeout(slider, 2300);
    }






});