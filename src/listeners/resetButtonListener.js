import { resetTimerHandler } from "../handlers/resetTimerHandler.js"

export const resetButtonListener = () => {
    document.getElementById('reset').addEventListener('click', resetTimerHandler)

}