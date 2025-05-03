import { data } from '../data';

export function prevSong(){ 
    let audio = document.querySelector(".audio");
    let songTitle = document.querySelector(".songTitle");
    let START_INDEX = 0;

    const songCurrentIndex = +localStorage.getItem('songIndex');
    let songPrevIndex = songCurrentIndex - 1;

    if(!audio) return;
    
    if(START_INDEX === songCurrentIndex) {
        songPrevIndex = data.length -1;
    };
    
    const song = data[songPrevIndex]

    songTitle.innerHTML = song.title;
    audio.src = song.src;

    localStorage.setItem('songIndex', songPrevIndex);
}