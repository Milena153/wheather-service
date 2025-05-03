import { data } from "../data";

export function loadSong() {
    const audio = document.querySelector(".audio");
    const songTitle = document.querySelector(".songTitle");
    const songIndex = +localStorage.getItem("songIndex");

    const song = data[songIndex];

    console.log(song);
    
    
    songTitle.innerHTML = song.title;
    audio.src = song.src;
    audio.load();
}