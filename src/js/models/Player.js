export default class Player {
    static #retrieveData() {
        /**
         gold = map[0];
         hellStones = map[1];
         shards = map[2];
         energy = map[3];
         maxEnergy = map[4];
         curHealth = map[5];
         maxHealth = map[6];

         level = map[7];
         fightValue = map[8];
         */
        const infoBar = document.querySelector('#infobar div[class="gold"]').textContent;
        const stats = [...infoBar.matchAll(/-?\d+(\.\d+)?/g)]
        return stats.map((e) => parseInt(e[0].replace('.', '')));
    }

    static get gold() {
        return this.#retrieveData()[0] ?? 0;
    }

    static get hellStones() {
        return this.#retrieveData()[1] ?? 0;
    }

    static get shards() {
        return this.#retrieveData()[2] ?? 0;
    }

    static get AP() {
        return this.#retrieveData()[3] ?? 0;
    }

    static get maxAP() {
        return this.#retrieveData()[4] ?? 0;
    }

    static get health() {
        return this.#retrieveData()[5] ?? 0;
    }

    get maxHealth() {
        return this.#retrieveData()[6] ?? 0;
    }

    get level() {
        return this.#retrieveData()[7] ?? 0;
    }

    get fightValue() {
        return this.#retrieveData()[8] ?? 0;
    }
}