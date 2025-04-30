import { data } from '../data';
import { playSong } from './playSong';
import { loadSong } from './loadSong';
import { pauseSong } from "./pauseSong"
export function nextSong(song){ 
    
    let songIndex = 0;
    let isPlaying = false;
    
    let nextBtn = document.querySelector(".after");
    let audio = document.querySelector(".audio");
    let songTitle = document.querySelector(".songTitle");
    let playBtn = document.querySelector(".play-btn");

    nextBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;
        const {title, src} = song;
        
        songIndex++;
        if(songIndex >= data.length){
            songIndex = 0;
        }

        songTitle.innerHTML = title;
        audio.src = src;

        playBtn.innerHTML = `<svg class="playIcon" width="40px" height="40px" viewBox="-0.5 0 7 7" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="ffffff" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509
                     291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774
                     297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]">
    </path>
                </g>
            </g>
        </g>
    </svg>
`

    loadSong(data[songIndex]);
    
//     if(isPlaying){
//         pauseSong();
//             playBtn.innerHTML = `<svg class="playIcon" width="40px" height="40px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//             <g id="Page-1" stroke="none" stroke-width="1" fill="ffffff" fill-rule="evenodd">
//                 <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#000000">
//                     <g id="icons" transform="translate(56.000000, 160.000000)">
//                         <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path>
//                     </g>
//                 </g>
//             </g>
//         </svg>
//     `
//     }
//     else{
//         playSong();
//             playBtn.innerHTML = `
//         <svg style="cursor: pointer" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 277.338 277.338" xml:space="preserve">
//         <g>
//             <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
//                 c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
//             <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
//                 V45.665C263.109,20.454,246.394,0,225.78,0z"/>
//         </g>    
//         </svg>
// `
//     }
// при переходе на следующую песню, она автоматически воспроизводится(НЕКОРРЕКТНО РАБОТАЕТ)
    });
}