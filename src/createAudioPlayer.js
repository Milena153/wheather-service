import { firstSong } from "./data"

export function createAudioPlayer() {
    const audioContainer = document.querySelector('.audioContainer') 
    audioContainer.innerHTML = `
    <button class="music_button">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m11 21.001v-14.001c0-.453.305-.85.742-.966l15-4c.301-.08.621-.016.867.173.247.189.391.482.391.793v18c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.125 0 2.164.372 3 1.001v-7.699l-13 3.466v12.232c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.125 0 2.164.372 3 1.001zm-3 .999c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm15-4c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm3-10.768v-2.93l-13 3.466v2.93z" fill="rgb(255, 255, 255)">
            </path>
        </svg>
    </button>

    <div class="audio_module closed">
        <div class="module_content closed">
            <h3 class="title">music list</h3>
                <figure id="audioPlayer" style="width:fit-content">
                <figcaption>Listen to the T-Rex:</figcaption>
                <audio  controls>
                    <source src=${firstSong.src} type="audio/mp3">          
                </audio>
                </figure>
                <p style="color:white">${firstSong.title}</p>
            <div class="song_list">
                <button class="song_button"></button>
                <button class="song_button"></button>
                <button class="song_button"></button>
                <button class="song_button"></button>
            </div>
            <button class="back_button">back</button>
        </div>
    </div>
    `
}

