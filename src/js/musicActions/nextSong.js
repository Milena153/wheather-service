import { data } from '../data';

export function nextSong(){ 
    let audio = document.querySelector(".audio");
    let songTitle = document.querySelector(".songTitle");
    const END_INDEX = data.length - 1;

    const songCurrentIndex = +localStorage.getItem('songIndex');
    let songNextIndex = songCurrentIndex + 1;

    if(!audio) return;

    if(songCurrentIndex === END_INDEX) {
        songNextIndex = 0;
    };
    
    const song = data[songNextIndex]

    songTitle.innerHTML = song.title;
    audio.src = song.src;

    localStorage.setItem('songIndex', songNextIndex);
}