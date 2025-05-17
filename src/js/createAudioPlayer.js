export function createAudioPlayer() {
    const audioContainer = document.querySelector('.audioContainer') 
    audioContainer.innerHTML = `
    <button class="music_button">
        <svg class="musicIcon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m11 21.001v-14.001c0-.453.305-.85.742-.966l15-4c.301-.08.621-.016.867.173.247.189.391.482.391.793v18c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.125 0 2.164.372 3 1.001v-7.699l-13 3.466v12.232c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c1.125 0 2.164.372 3 1.001zm-3 .999c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm15-4c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm3-10.768v-2.93l-13 3.466v2.93z" fill="rgb(255, 255, 255)">
            </path>
        </svg>
    </button>

    <div class="audio_module closed idle">
        <div class="module_content closed">
            <h3 class="title">music list</h3>
            <div class="closeBtn">×</div>
            <p class="songTitle" style="color:white"></p>
                <div class="progressCont">
                    <div class="progressBar"></div>
                </div>
                    <div class="custom-audio">    
                        <div class="buttonWrapper">
                            <button class="before">
                            <svg class="backButton" version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 360.000000 360.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M676 2789 l-26 -20 0 -969 0 -969 26 -20 c25 -20 39 -21 281 -21
                                l254 0 24 25 25 24 0 461 c0 254 4 460 8 458 5 -1 366 -209 804 -460 437 -252
                                802 -458 810 -458 8 0 27 9 42 21 l26 20 0 915 c0 901 0 914 -20 934 -19 19
                                -38 25 -70 20 -8 -1 -365 -204 -793 -452 -429 -247 -786 -452 -793 -455 -12
                                -4 -14 68 -14 456 l0 462 -25 24 -24 25 -254 0 c-242 0 -256 -1 -281 -21z"/>
                                </g>
                            </button>  
                        </span>
                            <audio class="audio" src="" ></audio>
                            <button class="play-btn">
                                <svg class="playIcon" width="40px" height="40px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="ffffff" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#000000">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]">
                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <button class="after">
                                <svg class="afterIcon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 360.000000 360.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M2365 2785 l-25 -24 0 -465 0 -464 -792 456 c-454 261 -806 458 -825
                                    460 -22 3 -37 -2 -52 -17 l-21 -21 0 -909 c0 -868 1 -910 18 -932 41 -49 -58
                                    -101 1345 708 176 100 321 183 323 183 2 0 4 -207 4 -460 l0 -461 25 -24 24
                                    -25 254 0 c242 0 256 1 281 21 l26 20 0 969 0 969 -26 20 c-25 20 -39 21 -281
                                    21 l-254 0 -24 -25z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="volumeWrapper">
                        <p class="volumePrecent">50%</p>
                        <input class="volumeInp" type="range" value="50" max="100" min="0"></input>
                    </div>
        </div>
    </div>
    `
}