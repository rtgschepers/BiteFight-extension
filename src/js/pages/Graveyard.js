import {ucFirst, translate, formatEndTime} from "../helpers/functions.js";

export default class Graveyard {
    static displayWorkFinishTime() {
        setInterval(this.#updateFinishTime, 1000);
        const select = document.querySelector('select[name="workDuration"]');
        select.addEventListener('change', this.#updateFinishTime);
        this.#updateFinishTime();
    }

    static displayCurrentWorkFinishTime() {
        const timeEl = document.querySelector('#graveyardCount');
        const endTime = formatEndTime(timeEl.firstChild.textContent);

        const endTimeEl = document.createElement('p');
        endTimeEl.classList.add('counter');
        endTimeEl.innerHTML = `${ucFirst(translate('work will be done at'))} <span>${endTime}</span>`;
        timeEl.parentNode.after(endTimeEl);

        const warning = document.createElement('p');
        warning.classList.add('counter');
        warning.innerHTML = `<span style="color:red;">${ucFirst(translate('warning'))}:</span> ${ucFirst(translate('ending work early results in no rewards, even if 30 minutes have passed'))}.`;
        endTimeEl.after(warning);
    }

    static #updateFinishTime() {
        const select = document.querySelector('select[name="workDuration"]');
        const duration = select.options[select.selectedIndex].text.slice(0, -2);
        const endTime = formatEndTime(duration);

        const tr = select.parentNode.parentNode.nextElementSibling ?? document.createElement('tr');
        const td = tr.firstElementChild ?? document.createElement('td');
        td.classList.add('no-bg');
        td.colSpan = 3;
        td.innerText = `${ucFirst(translate('work will be done at'))} ${endTime}`;
        tr.appendChild(td);
        select.parentNode.parentNode.after(tr);
    }
}