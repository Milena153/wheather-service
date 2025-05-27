export function volumeChange(){
    let volumeInp = document.querySelector(".volumeInp");
    let audio = document.querySelector(".audio");
    let spanValue = document.querySelector(".volumePrecent");

    audio.volume = volumeInp.value / 100;
    spanValue.innerText = (Math.round(audio.volume * 100) + "%");
    
}