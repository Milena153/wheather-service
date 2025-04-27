import { data } from "./data";
export function pauseSong(){
    let audio = document.querySelector(".audio");
    
    audio.pause();
}