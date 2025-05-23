import { nextSong } from "../musicActions/nextSong";
import { playBtnAction } from "../musicActions/playBtnAction";

export function progressBarChange(event){
    let {duration, currentTime} = event.srcElement;
    let audio = document.querySelector(".audio");
    let progress = document.querySelector(".progressBar")
    
    audio.addEventListener("timeupdate", () => {
        const progressPrecent = (( currentTime / duration ) * 100);
    
        progress.style.width = `${progressPrecent}%`
    
       audio.addEventListener("ended", async() =>{
           await nextSong();
            playBtnAction();
       });
        
    });
}
// только начал работу над прогресс баром