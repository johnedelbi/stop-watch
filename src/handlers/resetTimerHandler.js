import { resetTimer } from "../logic/resetTimer.js"
import { data } from "../data.js"
import { getTimeComponent } from "../components/watchTime.js"


export const resetTimerHandler = () => {

    if (data.interval != null) {
        data.interval = clearInterval(data.interval);
    }

    resetTimer();
    const timeComponent = getTimeComponent();
    document.getElementById('timer').innerHTML = "";
    document.getElementById('timer').append(timeComponent);
}