import { data } from "./data";
import {loadSong} from "./defaultMusic"
export function nextSong(){
    const audio = document.querySelector(".audio");
    const songTitle = document.querySelector(".songTitle");   
    songTitle.innerHTML = data[i++].title
    audio.src = `music/${data[i++].src}`
    loadSong();
}