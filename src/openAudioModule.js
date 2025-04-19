export function openAudioModule() {
const music_button = document.querySelector('.music_button');
const music_module = document.querySelector('.audio_module');   
const back_button = document.querySelector(".back_button");
const module_content = document.querySelector(".module_content");
console.log(module_content);
 

music_button.addEventListener("click", () => {

    if(music_module.classList.contains("closed")){
        module_content.classList.remove("closed");
        music_module.classList.remove("closed");
        music_button.classList.add("closed");
    }else{
        module_content.classList.add("closed");
        music_module.classList.add("closed");
        music_button.classList.remove("closed");
    }})

    back_button.addEventListener("click", () => {
        module_content.classList.add("closed");
        music_button.classList.remove("closed");
        music_module.classList.add("closed");
    })
}