const API_KEY = '2fb816f471ae4dd9aa6140506251705';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

export const fetchTempreture = async (city) =>{
    try {
        const response = await fetch(`${BASE_URL}&q=${city}`)
        if(!response.ok){
            throw new Error("Error with responce")
        }

        const data = await response.json()

        return data;
    } catch (error) {
        console.log(error); 
    }
}