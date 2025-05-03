import { progressBarChange } from "./progressBarChange";

export function progressBarAction(){
    let audio = document.querySelector(".audio");
    audio.addEventListener("timeupdate", progressBarChange);
}