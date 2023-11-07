document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const hiddenMenu = document.querySelector('.hidden-menu');
    const header = document.getElementsByTagName('header')[0];
    console.log("hello world")
    document.querySelector('.menu-icon').addEventListener('click', function () {
        // Your code to toggle the hidden menu here

        console.log('clicked')
        if (window.innerWidth <= 812) {
            if (getComputedStyle(hiddenMenu).display === 'none' || getComputedStyle(hiddenMenu).display === '') {
                hiddenMenu.style.display = 'flex';
                menuIcon.classList.add('active');
                hiddenMenu.classList.add('active');
                // header.style.backgroundColor = "rgba(0,0,0,0.6)";
            } else {
                hiddenMenu.style.display = 'none';
                menuIcon.classList.remove('active');
                hiddenMenu.classList.remove('active');
                // header.style.backgroundColor = "rgba(0,0,0,0)";
            }
        }
    });

    //---------------------------silider script--------------//
    var scrollVal = 0;
    const sliderTape = document.querySelector('.slider-tape');
    const scrollWidth = sliderTape.scrollWidth;
    const slide = document.querySelector('.card')
    sliderTape.classList.add('scroll');
    document.getElementById('scrollRight').addEventListener('click', function () {
        if (sliderTape.scrollLeft <= scrollWidth)
            sliderTape.scrollLeft += slide.offsetWidth;
        else sliderTape.scrollLeft = scrollWidth;
        // if()
    });
    document.getElementById('scrollLeft').addEventListener('click', function () {
        if (sliderTape.scrollLeft > slide.offsetWidth - 20)
            sliderTape.scrollLeft -= slide.offsetWidth; // Scroll to the end
        else sliderTape.scrollLeft = 0;
    });

    sliderTape.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        sliderTape.scrollLeft += evt.deltaX * 100;
        document.querySelector("body").scrollLeft += evt.deltaY
    });


    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Form submitted successfully!");
            document.getElementById("contact-form").reset();
        }
    });



    "use strict";
    feather.replace();


});








