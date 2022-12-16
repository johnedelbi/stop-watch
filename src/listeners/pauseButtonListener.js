import { pauseTimerHandler } from "../handlers/pauseTimerHandler.js"

const pause = document.getElementById('pause');
export const pauseButtonListener = () => {
    pause.addEventListener('click', pauseTimerHandler)
}