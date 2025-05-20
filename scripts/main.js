import { updateTemperature } from "../scripts/degrees.js";
import { updateTime } from "../scripts/updateTime.js";
import { createGeolocation } from "../scripts/city.js";

setInterval(updateTime);

createGeolocation();
updateTemperature();