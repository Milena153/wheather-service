import { createAudioPlayer } from './createAudioPlayer'
import { openAudioModule } from './openAudioModule'
import { loadSong } from './musicActions/loadSong'
import { playSong } from './musicActions/playSong';
import { pauseSong } from './musicActions/pauseSong'
import { nextSong } from './musicActions/nextSong';
import { prevSong} from './musicActions/prevSong'
import { data } from './data';
import { prevBtnAction } from './musicActions/prevBtnAction';
import { nextBtnAction } from './musicActions/nextBtnAction';
import { playStopMusic } from './musicActions/playStopMusic';
import { progressBarAction } from './progressBar/progressBarAction'
import { setProgress } from './progressBar/setProgress'

createAudioPlayer();

let playBtn = document.querySelector(".play-btn");
let nextBtn = document.querySelector(".after");
let prevBtn = document.querySelector(".before");
let audio = document.querySelector(".audio");
let progressContainer = document.querySelector(".progressCont")

let songIndex = 0;
loadSong(data[songIndex]);




openAudioModule();


playBtn.addEventListener("click", playStopMusic());

nextBtn.addEventListener("click",  nextBtnAction());

prevBtn.addEventListener("click", prevBtnAction());

audio.addEventListener("timeupdate", progressBarAction);

progressContainer.addEventListener("click", setProgress);

