// Countown function

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// initial value for the slideshow index
let slideIndex = 1;

// Shows the first image when the page first loads
showSlides(slideIndex);

// The function, that when called, will pass either a 1 or a -1 to the 
// showSlides function to either show the next slide or the previous slide (previous and next buttons)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// The function that allows for the dot navigation to go to a specfic slide based on which dot is pressed
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This is the main function of the slideshow. It controls which slide is currently being displayed at any given time
function showSlides(n) {
    let i;
    // Gathers all HTML elements with the class "mySlides" and "dot"
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // If the index tries to go passed the amount of slides that exist, it loops back to the first slide
    if (n > slides.length) {slideIndex = 1}
    
    // Just like above, if the index tries to go below 1 it will wrap to the last slide
    if (n < 1) {slideIndex = slides.length}
    
    // Loops through the slides and hides the last slide when a new one comes up (I think)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Basically the same as the above for loop except for the navigation dots. 
    // Just makes the dots reflect what is happening with the slides
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Displays the current slide and the corresponding dot
    // The -1 is there because arrays in Javascript start at 0 instead of 1 but the rest of the code makes the
    // index start at 1 by default
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}