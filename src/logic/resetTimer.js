import { data } from "../data.js"

/**
 * 
 */

export const resetTimer = () => {
    data.milliseconds = 0;
    data.seconds = 0;
    data.minutes = 0;
    data.interval = null;
    return data;
};