export default class Player {
    #infoBarData = null;
    #characterData = null;
    #talentData = null;

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
            this.#characterData = this.#getDataFromTab('character_tab');
        }
        return this.#characterData;
    }

    static #getTalentData() {
        if (!this.#talentData) {
            this.#talentData = this.#getDataFromTab('talents_tab');
        }
        return this.#talentData;
    }

    static #getDataFromTab(tabId) {
        const cells = document.querySelectorAll(`#${tabId} table tr td:nth-child(2)`);
        return Array.from(cells).map(cell => cell.textContent);
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

    static get playerId() {
        return parseInt(this.#getCharacterData()[2] ?? 0);
    }

    static get playerName() {
        return this.#getCharacterData()[3] ?? '';
    }

    static get topScorePosition() {
        return parseInt(this.#getCharacterData()[6] ?? 0);
    }

    static get allianceTopScorePosition() {
        return parseInt(this.#getCharacterData()[7] ?? 0);
    }

    static get availableTalentPoints() {
        return parseInt(this.#getTalentData()[0] ?? 0);
    }

    static get spentTalentPoints() {
        return parseInt(this.#getTalentData()[1] ?? 0);
    }

    static get maxTalentPoints() {
        return parseInt(this.#getTalentData()[2] ?? 0);
    }
}