import Player from '../models/Player.js';

export default class Robbery {
    static #robberies = {
        0: {
            id: 1,
            energy: 1,
        },
        1: {
            id: 2,
            energy: 1,
        },
        2: {
            id: 3,
            energy: 2,
        },
        3: {
            id: 4,
            energy: 2,
        },
        4: {
            id: 5,
            energy: 3,
        }
    }

    static addAutoFarmButtons() {
        /** @type {NodeListOf[Node]} */
        const containers = document.querySelectorAll('#humanhunt div[class="btn-left center"]');
        for (let i = 0; i < containers.length; i++) {
            console.log(i);
            const container = containers[i];
            const robbery = this.#robberies[i];
            console.log(containers, container);

            const origCont = container.cloneNode(true);
            container.classList.remove(...container.classList);
            container.style.display = 'flex';
            container.innerHTML = '';
            container.appendChild(origCont);

            if (Player.AP >= robbery.energy) {
                const origBanner = container.previousElementSibling
                const banner = origBanner.cloneNode(true);
                banner.style.cursor = '';
                banner.removeAttribute('onClick');
                origBanner.parentNode.replaceChild(banner, origBanner);

                const contFarm = container.cloneNode(true);
                const btnFarm = contFarm.querySelector('button');
                btnFarm.innerText = 'Auto farm';
                btnFarm.removeAttribute('onClick');
                btnFarm.addEventListener('click', this.startAutoFarm);

                container.appendChild(contFarm);
            }
        }
    }

    static startAutoFarm() {
        console.log('Start auto farm');
    }
}