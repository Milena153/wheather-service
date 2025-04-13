export function openAudioModule() {
const music_button = document.querySelector('.music_button');
const music_module = document.querySelector('.audio_module');   
const back_button = document.querySelector(".back_button");

music_button.addEventListener("click", () => {

    if(music_module.classList.contains("closed") || music_button.classList.contains("closed")){
        music_module.classList.remove("closed");
        music_button.classList.add("closed");
    }else{
            music_module.classList.add("closed");
            music_button.classList.remove("closed");
    }})

    back_button.addEventListener("click", () => {
        music_button.classList.remove("closed");
        music_module.classList.add("closed");
    })
}