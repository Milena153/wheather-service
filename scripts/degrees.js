import { fetchTempreture } from "./fetchTempreture.js";

export async function updateTemperature() {
    const {current} = await fetchTempreture('Minsk');
    
    const temperatureData = current.temp_c || 13;
    const temperatureIcon = current.condition.icon ||'../src/icons/cloud_black.png';
    
    const temperatureContainer = document.querySelector('.time__temperature');
    temperatureContainer.innerHTML = `
        <div class="time__tempValue">${temperatureData}°C</div>
        <img class="time__cloud" src=${temperatureIcon} alt="temperature icon">
        `
};