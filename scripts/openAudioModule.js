export function openAudioModule() {
    let music_button = document.querySelector('.music_button');
    let music_module = document.querySelector('.audio_module');   
    let back_button = document.querySelector(".closeBtn");
    let module_content = document.querySelector(".module_content");
    
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
