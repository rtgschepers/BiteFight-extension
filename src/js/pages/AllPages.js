import {translate, ucFirst} from "../helpers/functions.js";

export default class AllPages {
    static stylizationFixes() {
        this.#uppercaseBackButton();
    }

    static #uppercaseBackButton() {
        const btn = Array.from(document.querySelectorAll('div[id=content] a[href]'))
            .find(el => el.textContent.toLowerCase() === translate('back'));
        if (btn) {
            btn.innerText = ucFirst(btn.innerText);
        }
    }
}