
export const createGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        try{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        const url = `https:nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`;
    
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" } 
        });
    
        const data = await response.json();
    
        document.getElementById("city").textContent =`${data.address.city || data.address.town || data.address.village}`;
    } 
    catch(error) {
        document.getElementById("city").textContent = "Не удалось определить ваше местоположение.";
    }});
};



export const createBackground = () => {

let apiKey = ''; 
let city = '';
let url = '';


function changeBackground(weather) {
if (weather.includes('clear')) {
    document.body.style.background = '' ;
} else if (weather.includes('cloud')) {
    document.body.style.background = '';
} else if (weather.includes('rain')) {
    document.body.style.background = '' ;
} else if (weather.includes('snow')) {
    document.body.style.background = '' ;
} else {
    document.body.style.background =  '';
}
}}