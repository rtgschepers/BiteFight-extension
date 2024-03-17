import {getDataFromTab} from "../helpers/functions.js";

export default class Talents {
    #talentData = null;

    static #getTalentData() {
        if (!this.#talentData) {
            this.#talentData = getDataFromTab('talents_tab');
        }
        return this.#talentData;
    }

    static get availablePoints() {
        return parseInt(this.#getTalentData()[0] ?? 0);
    }

    static get spentPoints() {
        return parseInt(this.#getTalentData()[1] ?? 0);
    }

    static get maxPoints() {
        return parseInt(this.#getTalentData()[2] ?? 0);
    }
}