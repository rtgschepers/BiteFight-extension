export default class Profile {
    static enhanceIndex() {

    }

    static #clickableRank() {
        const page = Math.ceil(rank / 50);
        const pathname = `/user/highscore/player/0/${page}`
        const queryParams = '?order=&show[]=level&show[]=raid&show[]=fightvalue';
    }

    static #addHealingTime() {

    }

    static addAPRegenTime() {

    }
}