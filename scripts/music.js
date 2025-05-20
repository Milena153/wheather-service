// export const createAudioplayer = () =>{
// const audio_but = document.querySelector(".audio");
// const cover_div = audio_but.firstElementChild;
// const title_music = cover_div.firstElementChild;
// const music_list = cover_div.lastElementChild;
// const icon = cover_div.querySelector(".visible_icon");


// let buttons = document.querySelectorAll(".hidden_but");

// audio_but.addEventListener("click", (event) => {
//   if (!event.target.classList.contains("hidden-button")) {
//       audio_but.classList.toggle("open");
//       title_music.classList.toggle("open_title");
//       music_list.classList.toggle("visible");
//       icon.classList.toggle("hidden_icon");
      

//       if (audio_but.classList.contains("open")) {
//         buttons.forEach(element => {
//           element.classList.replace("hidden_but", "visible_but");
//         });
//       } else {
//         buttons.forEach(element => {
//           element.classList.replace("visible_but", "hidden_but");
//         });
//       }
//     }
//   });

//   buttons.forEach(button => {
//     button.addEventListener('click', (event) => {
//       event.stopPropagation();
//     });
//   });
// } 

