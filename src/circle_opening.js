let audio_but = document.querySelector(".audio");
let cover_div = audio_but.firstElementChild;
let title_music = cover_div.firstElementChild;
let music_list = cover_div.lastElementChild;

audio_but.addEventListener("click", function() {
    audio_but.classList.toggle("open");
    title_music.textContent = "music list";
    title_music.classList.toggle("open_title");
    music_list.classList.toggle("visible");
});

cover_div.addEventListener("click", function() {
    
});

