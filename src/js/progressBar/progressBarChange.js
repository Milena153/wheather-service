import { nextSong } from "../musicActions/nextSong";

export function progressBarChange(event){
    let {duration, currentTime} = event.srcElement;
    let audio = document.querySelector(".audio");
    let progress = document.querySelector(".progressBar")
    
    audio.addEventListener("timeupdate", () => {
        const progressPrecent = (( currentTime / duration ) * 100);
    
        progress.style.width = `${progressPrecent}%`
        console.log(progressPrecent, duration);
    
        if(currentTime >= duration - 20){
            nextSong();
            return;
        }
        
    });
}
// только начал работу над прогресс баром