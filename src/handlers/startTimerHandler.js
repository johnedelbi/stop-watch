import { data } from "../data.js";
import { getWatchTime } from "../logic/startTimer.js"
import { getTimeComponent } from "../components/watchTime.js"

export const startTimerHandler = () => {

    if (data.interval != null) {
        data.interval = clearInterval(data.interval);
    }
    data.interval = setInterval(function () {
        let time = getWatchTime();
        const timeComponent = getTimeComponent(time);
        document.getElementById('timer').innerHTML = ""
        document.getElementById('timer').append(timeComponent);
    }, 10)


}