export function playSong(){
    let audio = document.querySelector(".audio");
    audio.play();
    localStorage.setItem('isPlaying', true)
}