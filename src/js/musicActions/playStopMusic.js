import { playBtnAction } from "./playBtnAction";

export function createPlayStopMusicAction (){
    let playBtn = document.querySelector(".play-btn");
    let isPlaying = false;
    localStorage.setItem('isPlaying', isPlaying);

    console.log(isPlaying);
    
    playBtn.addEventListener("click", playBtnAction);
}