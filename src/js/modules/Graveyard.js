export default class Graveyard {
    static displayWorkFinishTime() {
        setInterval(this.#updateFinishTime, 1000);
        const select = document.querySelector('select[name="workDuration"]');
        select.addEventListener('change', this.#updateFinishTime);
    }

    static displayCurrentWorkFinishTime() {
        const timeEl = document.querySelector('#graveyardCount');
        const endTime = this.#formatEndTime(timeEl.firstChild.textContent);

        const endTimeEl = document.createElement('p');
        endTimeEl.style.textAlign = 'center';
        endTimeEl.innerText = `Work is done at ${endTime}`;
        timeEl.parentNode.after(endTimeEl);

        const warning = document.createElement('p');
        warning.style.textAlign = 'center';
        warning.innerHTML = `<span style="color:red;">Warning:</span> Ending work early results in no rewards, even if 30 minutes have passed.`;
        endTimeEl.after(warning);
    }

    static #updateFinishTime() {
        const select = document.querySelector('select[name="workDuration"]');
        const duration = select.options[select.selectedIndex].text.slice(0, -2);
        const endTime = Graveyard.#formatEndTime(duration);

        const tr = select.parentNode.parentNode.nextElementSibling ?? document.createElement('tr');
        const td = tr.firstElementChild ?? document.createElement('td');
        td.classList.add('no-bg');
        td.colSpan = 3;
        td.innerText = `Work will be done at ${endTime}`;
        tr.appendChild(td);
        select.parentNode.parentNode.after(tr);
    }

    static #formatEndTime(timeStr) {
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        const now = new Date();

        now.setHours(now.getHours() + hours);
        now.setMinutes(now.getMinutes() + minutes);
        now.setSeconds(now.getSeconds() + seconds)

        const formattedHours = ('0' + now.getHours()).slice(-2);
        const formattedMinutes = ('0' + now.getMinutes()).slice(-2);
        const formattedSeconds = ('0' + now.getSeconds()).slice(-2);
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}