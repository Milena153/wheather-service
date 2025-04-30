import { progressBarChange } from "./progressBar";

export function progressBarAction(){
    let audio = document.querySelector(".audio");
    audio.addEventListener("timeupdate", progressBarChange);
}