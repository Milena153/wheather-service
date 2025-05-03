import { createAudioPlayer } from './createAudioPlayer'
import { openAudioModule } from './openAudioModule'
import { loadSong } from './musicActions/loadSong'
import { createPlayStopMusicAction } from './musicActions/playStopMusic';
import { progressBarAction } from './progressBar/progressBarAction'
import { setProgress } from './progressBar/setProgress'
import { nextSong } from './musicActions/nextSong';
import { prevSong } from './musicActions/prevSong';

createAudioPlayer();
openAudioModule();

let nextBtn = document.querySelector(".after");
let prevBtn = document.querySelector(".before");
let audio = document.querySelector(".audio");
let progressContainer = document.querySelector(".progressCont")

let songIndex = 0;
localStorage.setItem('songIndex', songIndex)

loadSong();
createPlayStopMusicAction();

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", progressBarAction);

progressContainer.addEventListener("click", setProgress);

