export function pauseSong(){
    let audio = document.querySelector(".audio");
    audio.pause();
    localStorage.setItem('isPlaying', false)
}