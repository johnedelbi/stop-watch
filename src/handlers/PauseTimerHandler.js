import { data } from "../data.js";

export const pauseTimerHandler = () => {
    if (data.interval != null) {
        data.interval = clearInterval(data.interval);

    }

}