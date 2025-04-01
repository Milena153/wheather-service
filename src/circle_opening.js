let audio_but = document.querySelector(".audio");
let cover_div = audio_but.firstElementChild;
let title_music = cover_div.firstElementChild;
let music_list = cover_div.lastElementChild;


let buttons = document.querySelectorAll(".hidden_but");
console.log(buttons);


audio_but.addEventListener("click", (event) => {


    if (!event.target.classList.contains("hidden-button")) {
        audio_but.classList.toggle("open");
        title_music.textContent = "music list";
        title_music.classList.toggle("open_title");
        music_list.classList.toggle("visible");
        

        if (audio_but.classList.contains("open")) {
          buttons.forEach(element => {
            element.classList.replace("hidden_but", "visible_but");
          });
        } else {
          buttons.forEach(element => {
            element.classList.replace("visible_but", "hidden_but");
          });
        }
    }
});


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log("Кнопка нажата!");
    });
  });

