$(document).ready(function (){


    

    /* For sticky navigation */

    // $('.js--section-features').waypoint(function(direction) {
    //     if (direction == "down") {
    //         $('nav').addClass('sticky');
    //     } else {
    //         $('nav').removeClass('sticky');
    //     }
    // }, {
    //         offset: '50px;'
    // })




    /* Navigation Smooth Scroll on buttons */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
            };
            });
        }
        }
    });



    /* Animations on Scroll */

    /* Why Work With Us */
    $('.wp1').waypoint(function(direction) {
        $('.wp1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '60%;'
    });

    /* Envision Testimonials */
    $('.wp2').waypoint(function(direction) {
        $('.wp2').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '52%;'
    });

    /* Fitness Classes - Cardio */
    $('.wp3').waypoint(function(direction) {
        $('.wp3').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '60%;'
    });

    /* Fitness Classes - Yoga */
    $('.wp4').waypoint(function(direction) {
        $('.wp4').addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '50%;'
    });

    /* Fitness Classes - Strength */
    $('.wp5').waypoint(function(direction) {
        $('.wp5').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '60%;'
    });

    /* Fitness Classes - Cycling */
    
    $('.wp6').waypoint(function(direction) {
        $('.wp6').addClass('animate__animated animate__fadeInRight');

    }, {
        offset: '50%;'
    });

    /* Sign Up Prices */
    $('.wp7').waypoint(function(direction) {
        $('.wp7').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%;'
    });

    /* Footer Links */
    $('.wp8').waypoint(function(direction) {
        $('.wp8').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '90%;'
    });

    /* Footer Icons */
    $('.wp9').waypoint(function(direction) {
        $('.wp9').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '90%;'
    });

    /* Copyright Statement */
    $('.wp10').waypoint(function(direction) {
        $('.wp10').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '90%;'
    });


    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(400);
        if (icon.hasClass('fas fa-bars')) {
            icon.removeClass('fas fa-bars');
            icon.addClass('fas fa-times');
            
        } else {
            icon.removeClass('fas fa-times');
            icon.addClass('fas fa-bars');
            

        }


    })


});