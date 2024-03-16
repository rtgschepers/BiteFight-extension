import {translate} from "../helpers/functions.js";

export default class Grotte {
    static addAutoFarmButtons() {
        const table = document.querySelector('table[class="noBackground"]');
        const row = document.createElement('tr');
        const difficulties = [translate('easy'), translate('medium'), translate('difficult')];

        for (let i = 0; i < 3; i++) {
            const cell = document.createElement('td');
            cell.innerHTML = `<div class="clearfix" style="line-height: 60px;"><input type="button" class="btn-small" value="Farm ${difficulties[i]}"/></div>`;
            row.append(cell);
        }
        table.append(row);
    }
}