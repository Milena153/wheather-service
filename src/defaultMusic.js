import { data } from "./data";
export function loadSong(song) {
    const audio = document.querySelector(".audio");
    const songTitle = document.querySelector(".songTitle");  

    songTitle.innerHTML = song.title;
    audio.src = song.src;
}