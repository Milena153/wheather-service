import { data } from "./data";
export function loadSong() {
    let i = 0;
    const audio = document.querySelector(".audio");
    const songTitle = document.querySelector(".songTitle");   
    songTitle.innerHTML = data[i].title
    audio.src = `music/${data[i].src}`
}

