import { loadSong } from "../musicActions/loadSong";
import { nextSong } from "../musicActions/nextSong";
export function progressBarChange(event){
    
    const {duration, currentTime} = event.srcElement;
    let audio = document.querySelector(".audio");
    let progress = document.querySelector(".progressBar")

    audio.addEventListener("timeupdate", () => {
        const progressPrecent = (( currentTime / duration ) * 100);
    
    progress.style.width = `${progressPrecent}%`
    console.log(progressPrecent);
    
    if(currentTime >= duration){
        loadSong();
        nextSong();
    }
    });

    
}
// только начал работу над прогресс баром