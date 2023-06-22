const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".button");
let current = 0;
let isAnimating = false;

button=document.getElementById('click')
info=document.getElementById('more-info')
leave=document.getElementById('leave')
 video = document.getElementById('bg-video')

// Replay the video when it ends





buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!isAnimating) {
            button.classList.contains("left") ? gotoPrev() : gotoNext()  ;
        }
    });
});

const gotoPrev = () => {
    current = current > 0 ? current - 1 : slides.length - 1;
    updateSlides("prev");
};

const gotoNext = () => {
    current = current < slides.length - 1 ? current + 1 : 0;
    updateSlides("next");
};

const updateSlides = (direction) => {
    isAnimating = true;
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        slide.classList.remove("prev");
        slide.classList.remove("next");

        if (index === current) {
            slide.classList.add("active");
        } else if (
            index === current - 1 ||
            (current === 0 && index === slides.length - 1)
        ) {
            slide.classList.add("prev");
        } else if (
            index === current + 1 ||
            (current === slides.length - 1 && index === 0)
        ) {
            slide.classList.add("next");
        }
    });

    setTimeout(() => {
        isAnimating = false;
    }, 300);
};
button.addEventListener("click",function (){
    console.log("questiob ")
    info.style.display = "inline"
})
leave.addEventListener('click',function (){
    console.log('leave')
    info.style.display='none'
})
video.addEventListener('ended', function() {
    video.currentTime = 0; // Restart the video
    video.play();
})