import { data } from '../data';

export async function prevSong(){ 
    let playBtn = document.querySelector(".play-btn");
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

    try{
        audio.pause();
        audio.currentTime = 0;
        songTitle.innerHTML = song.title;
        audio.src = song.src;
        await new Promise((resolve) => {
            audio.addEventListener("canplaythrough", resolve, {once: true});
        });
        audio.play();
        localStorage.setItem('isPlaying', true);
    
        localStorage.setItem('songIndex', songPrevIndex);
    
    }catch(err){
        if(err.name === 'AbortError'){
            console.log("Переключение трека было прервано!");
        } else{
            console.error("Ошибка воспроизведения: ", err);
        }
    }



    playBtn.innerHTML = `
        <svg style="cursor: pointer" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 277.338 277.338" xml:space="preserve">
        <g>
            <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
                c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
            <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
                V45.665C263.109,20.454,246.394,0,225.78,0z"/>
        </g>    
        </svg>
    `
}