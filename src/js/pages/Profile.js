import Player from "../models/Player.js";
import {formatEndTime} from "../helpers/functions.js";

export default class Profile {
    static enhanceIndex() {
        this.#clickableRank();
        // this.#addHealingTime();
        // this.addAPRegenTime();
    }

    static #clickableRank() {
        const page = Math.ceil(Player.topScorePosition / 50);
        const pathname = `/user/highscore/player/0/${page}`
        const queryParams = '?order=&show[]=level&show[]=raid&show[]=fightvalue';
        const link = window.location.protocol + '//' + window.location.host + pathname + queryParams;

        const td = document.querySelectorAll('#character_tab td:nth-child(2)')[6];
        td.innerHTML = `<a href=${link}>${Player.topScorePosition}</a>`;
    }

    static #addHealingTime() {
        const endTime = formatEndTime(Player.healingTime);
        const td = document.querySelectorAll('#character_tab td:nth-child(2)')[8];
        td.innerHTML = td.innerHTML + ` (${endTime})`;
    }

    static addAPRegenTime() {

    }
}