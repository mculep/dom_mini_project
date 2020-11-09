// Date the contest will run

const dueDate = new Date("Dec 15, 2020 00:00:00").getTime();

// Calculating the difference from the dueDate minus the currentDate
timer = () => {
    let currentDate = new Date().getTime();
    let diff = dueDate - currentDate;
    if (diff < 0) {
        clearInterval(i);
        document.getElementById("container").style.display = "none";
    }
    // Math.floor to get a whole number
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    days <= 9 ? (days = `00 ${days}`) : days <= 99 ? (days = `0${days}`) : days;
    hours <= 9 ? (hours = `0${hours}`) : hours;
    minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
    seconds <= 9 ? (seconds = `0${seconds}`) : seconds;
    // Grabbing all content that is in a class/id with querySelector from HTML file
    document.querySelector("#days .box").textContent = days;
    document.querySelector("#hours .box").textContent = hours;
    document.querySelector("#minutes .box").textContent = minutes;
    document.querySelector("#seconds .box").textContent = seconds;
};

// Setinterval function will set timer countdown

const i = setInterval(timer, 1000);
timer();

// Music Player UI

music_name = "music.mp3";

let play_btn = document.querySelector("#play");
let next_btn = document.querySelector("#next");
let prev_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img");
let isPlaying = false;
let duration = 0;
let currentTime = 0;

let Song = new Audio();
window.onload = playsong;

// playsong is a function that gives instructions when the play button is clicked
// the pause button icon will appear.

function playsong() {
    Song.src = music_name;
    play_btn.addEventListener("click", function () {
        if (!isPlaying) {
            Song.play();
            isPlaying = true;
            duration = Song.duration;
            range.max = duration;
            play_img.src = "images/pause.png";
        } else {
            Song.pause();
            isPlaying = false;
            play_img.src = "images/play.png";
        }

        // controls the slider as the music plays

        range.addEventListener("change", function () {
            Song.currentTime = range.value;
        });

        Song.addEventListener("timeupdate", function () {
            range.value = Song.currentTime;
        });
    });
}
