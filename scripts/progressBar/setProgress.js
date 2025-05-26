import { nextSong } from "../musicActions/nextSong";

export function setProgress(event){
    let audio = document.querySelector(".audio");
    const containerWidth = event.currentTarget.clientWidth;
    const clickPositionX = event.offsetX;
    let percentage = (clickPositionX / containerWidth) * 100;
    const duration = audio.duration;

    const progressBar = document.querySelector(".progressBar");
    progressBar.style.width = `${percentage}%`;

    audio.currentTime = (clickPositionX / containerWidth) * duration

}