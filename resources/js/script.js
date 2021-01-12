$(document).ready(function (){


    

    /* For sticky navigation */

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '50px;'
    })

    /* Alternate Method for Sticky Navigation */
    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navBar");
    // var sticky = stickyNavTriggerPoint.offsetTop;
    // var offset = -90;

    // function myFunction() {
    //     if (window.pageYOffset >= (sticky + offset)) {
    //     navbar.classList.add("sticky")
    //     } else {
    //     navbar.classList.remove("sticky");
    //     }
    // }



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
            }, 1300, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });



    /* Animations on Scroll */



    /* Features */
    $('.wp1').waypoint(function(direction) {
        $('.wp1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '56%;'
    });


    /* Phone in Steps section */
    $('.wp2').waypoint(function(direction) {
        $('.wp2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%;'
    });


    /* Cities section */
    $('.wp3').waypoint(function(direction) {
        $('.wp3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '55%;'
    });

    /* Sign-up Plans section */
    $('.wp4').waypoint(function(direction) {
        $('.wp4').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '55%;'
    });

    /* Footer Links */
    $('.wp5').waypoint(function(direction) {
        $('.wp5').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '90%;'
    });

    /* Footer copyright statement */
    $('.wp6').waypoint(function(direction) {
        $('.wp6').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '92%;'
    });



    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(400);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
            
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            

        }


    })


});