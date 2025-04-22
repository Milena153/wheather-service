import { data } from "./data";
export function pauseSong(){
    let music_module = document.querySelector('.audio_module');   
    let audio = document.querySelector(".audio");
    
    audio.pause();
}