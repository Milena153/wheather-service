import { updateTemperature } from "../scripts/degrees.js";
import { updateTime } from "../scripts/updateTime.js";
import { createGeolocation } from "../scripts/city.js";
import { setBackground } from "../scripts/setBackground.js";
import { createAudioPlayer } from './createAudioPlayer';
import { openAudioModule } from './openAudioModule';
import { loadSong } from './musicActions/loadSong';
import { createPlayStopMusicAction } from './musicActions/playStopMusic';
import { setProgress } from './progressBar/setProgress';
import { nextSong } from './musicActions/nextSong';
import { prevSong } from './musicActions/prevSong';
import { volumeChange } from './musicActions/volumeChange';
import {pageStyle} from "../scripts/dark-switcher.js";
setInterval(updateTime);

const city = createGeolocation();
console.log(city);
updateTemperature();
setBackground();
pageStyle();


// document.querySelector('body').style.background = "linear-gradient(192deg, rgba(2, 0, 36, 1) 0%, rgba(33, 33, 117, 1) 0%, rgba(0, 212, 255, 1) 100%)"
createAudioPlayer();
openAudioModule();

let nextBtn = document.querySelector(".after");
let prevBtn = document.querySelector(".before");
let audio = document.querySelector(".audio");
let progressContainer = document.querySelector(".progressCont")
let volumeInp = document.querySelector(".volumeInp");

let songIndex = 0;
localStorage.setItem('songIndex', songIndex)

loadSong();
createPlayStopMusicAction();

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", progressBarAction);

progressContainer.addEventListener("click", setProgress);

volumeInp.addEventListener("click", volumeChange);