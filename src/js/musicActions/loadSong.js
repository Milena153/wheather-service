import { data } from "../data";

export function loadSong() {
    let volumeInp = document.querySelector(".volumeInp");
    const audio = document.querySelector(".audio");
    const songTitle = document.querySelector(".songTitle");
    const songIndex = +localStorage.getItem("songIndex");

    const song = data[songIndex];

    console.log(song);
    
    
    audio.volume = volumeInp.value / 100;
    songTitle.innerHTML = song.title;
    audio.src = song.src;
    audio.load();
}