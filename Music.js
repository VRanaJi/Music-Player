let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let songs = [
  {
    name: "Shaitan",
    title: "Shaitan",
    artist: "Ajay Devgn",
  },
  {
    name: "Mahabharat",
    title: "Mahabharat",
    artist: "Mahabharat",
  },
  {
    name: "Daaru Party",
    title: "Daaru Party",
    artist: "Millind Gaba",
  },
  {
    name: "Bones",
    title: "Bones",
    artist: "Imagine Dragons",
  },
];

let isplaying = false;

let playmusic = () => {
  isplaying = true;
  audio.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

let pausemusic = () => {
  isplaying = false
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", () => {
  if (isplaying == false) {
    playmusic();
  } else {
    pausemusic();
  }
});

const loadsong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  audio.src = "Music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

let songindex = 1;

const nextsong = () => {
  songindex = (songindex + 1) % songs.length;
  loadsong(songs[songindex]);
  playmusic();
};

const prevsong = () => {
  songindex = (songindex - 1 + songs.length) % songs.length;
  loadsong(songs[songindex]);
  playmusic();
};

next.addEventListener("click", nextsong);
previous.addEventListener("click", prevsong);

let volume_slider = document.querySelector(".volume_slider");

function setVolume() {
  audio.volume = volume_slider.value / 100;
}

let progress_slider = document.querySelector(".progress_slider");

function setProgress() {
  audio.currentTime = audio.duration * (progress_slider.value / 100);
}

audio.addEventListener("timeupdate", () => {
  let progress = (audio.currentTime / audio.duration) * 100;
  progress_slider.value = progress;

  let fillWidth = (audio.currentTime / audio.duration) * 100;
  progress_slider.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${fillWidth}%, #ddd ${fillWidth}%, #ddd 100%)`;
});

progress_slider.addEventListener("input", () => {
  setProgress();
});
