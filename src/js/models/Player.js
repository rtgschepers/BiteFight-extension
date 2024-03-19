import Talents from "./Talents.js";
import {getDataFromTab} from "../helpers/functions.js";

export default class Player {
    static #infoBarData = null;
    static #characterData = null;
    static talents = Talents;

    static #getInfoBarData() {
        if (!this.#infoBarData) {
            const infoBar = document.querySelector('#infobar div[class="gold"]').textContent;
            const stats = [...infoBar.matchAll(/-?\d+(\.\d+)?/g)];
            this.#infoBarData = stats.map((e) => parseInt(e[0].replace('.', '')));
        }
        return this.#infoBarData;
    }

    static #getCharacterData() {
        if (!this.#characterData) {
            this.#characterData = getDataFromTab('character_tab');
        }
        return this.#characterData;
    }

    static get gold() {
        return this.#getInfoBarData()[0] ?? 0;
    }

    static get hellStones() {
        return this.#getInfoBarData()[1] ?? 0;
    }

    static get shards() {
        return this.#getInfoBarData()[2] ?? 0;
    }

    static get AP() {
        return this.#getInfoBarData()[3] ?? 0;
    }

    static get maxAP() {
        return this.#getInfoBarData()[4] ?? 0;
    }

    static get health() {
        return this.#getInfoBarData()[5] ?? 0;
    }

    static get maxHealth() {
        return this.#getInfoBarData()[6] ?? 0;
    }

    static get level() {
        return this.#getInfoBarData()[7] ?? 0;
    }

    static get fightValue() {
        return this.#getInfoBarData()[8] ?? 0;
    }

    static get province() {
        return this.#getCharacterData()[0] ?? '';
    }

    static get race() {
        return this.#getCharacterData()[1] ?? '';
    }

    static get id() {
        return parseInt(this.#getCharacterData()[2] ?? 0);
    }

    static get name() {
        return this.#getCharacterData()[3] ?? '';
    }

    static get topScorePosition() {
        return parseInt(this.#getCharacterData()[6]?.replace('.', '') ?? 0);
    }

    static get allianceTopScorePosition() {
        return parseInt(this.#getCharacterData()[7].replace('.', '') ?? 0);
    }

    static get healingTime() {
        const content = this.#getCharacterData()[8] ?? '';
        if(content === '') {
            return content;
        }

        return content.substring(0, 8);
    }

    static get APRegenTime() {
        return this.#getCharacterData()[8] ?? '';
    }
}