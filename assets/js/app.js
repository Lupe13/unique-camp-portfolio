let audioElement = document.getElementById("squid-audio");
let audioBtnElement = document.getElementById("toggle-audio-btn");

let pauseIconElement = document.getElementById("pause-icon");
let playIconElement = document.getElementById("play-icon");

let toggleImgBtn = document.getElementById("toggle-img-btn");
let squidCoderSvgElements = document.querySelectorAll(".squid-coder-svg");

audioBtnElement.addEventListener("click", toggleAudio);
toggleImgBtn.addEventListener("click", toggleImg);

function toggleImg() {
    squidCoderSvgElements.forEach(node => {
        node.classList.toggle("transform-active-coder-img");
    })
}

function toggleAudio() {
    if (!isAudioPaused()) {
        audioElement.pause();
        pauseIconElement.style.display = "none";
        playIconElement.style.display = "block";
    } else {
        audioElement.play();
        pauseIconElement.style.display = "block";
        playIconElement.style.display = "none";
    }
}

function isAudioPaused() {
    return audioElement.paused;
}
