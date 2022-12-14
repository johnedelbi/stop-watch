import { startTimerHandler } from "../handlers/startTimerHandler.js"

export const startButtonListener = () => {
    document.getElementById('start').addEventListener('click', startTimerHandler)

}