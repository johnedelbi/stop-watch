/**
 * 
 */

import { data } from "../data";

export const pauseTimer = () => {

    clearInterval(data.interval);
    data.interval = null;

};