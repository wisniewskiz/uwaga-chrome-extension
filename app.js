import { getData } from "./utilities/_getData.js";
import { updateProgress } from "./utilities/_updateProgress.js";
import { eventListeners } from "./utilities/_eventListeners.js";

const thisDay = new Date().toLocaleString("default", { day: "2-digit" });
const thisMonth = new Date().toLocaleString("default", { month: "short" });
document.querySelector(".header__date--day").textContent = thisDay;
document.querySelector(".header__date--month").textContent = thisMonth;

getData();
updateProgress();
eventListeners();
