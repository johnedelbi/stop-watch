import { pauseTimerHandler } from "../handlers/pauseTimerHandler.js"

export const pauseButtonListener = () => {
    document.getElementById('pause').addEventListener('click', pauseTimerHandler)

}