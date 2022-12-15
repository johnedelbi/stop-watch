import { data } from "../data.js";

export const getTimeComponent = () => {
    const time = document.createElement('div');
    const h1Title = document.createElement('h1');
    h1Title.innerText = 'Stop Watch';
    h1Title.className = 'time-heading';
    const milliseconds = document.createElement('span');
    milliseconds.innerText = (data.milliseconds) < 10 ? "00" + data.milliseconds : (data.milliseconds) < 100 ? "0" + data.milliseconds : data.milliseconds;

    const seconds = document.createElement('span');
    seconds.innerText = (data.seconds) < 10 ? "0" + data.seconds + ":" : data.seconds + ":";

    const minutes = document.createElement('span');
    minutes.innerText = (data.minutes) < 10 ? "0" + data.minutes + ":" : data.minutes + ":";

    time.append(h1Title, minutes, seconds, milliseconds);

    return time;
}
