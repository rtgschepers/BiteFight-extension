import Robbery from "./modules/Robbery.js";
import Graveyard from "./modules/Graveyard.js";
import Grotte from "./modules/Grotte.js";
import {loadTranslations} from "./helpers/functions.js";

export async function main() {
    await loadTranslations('nl');

    switch (window.location.pathname) {
        case '/city/graveyard':
            Graveyard.displayWorkFinishTime();
            break;
        case '/user/working':
            Graveyard.displayCurrentWorkFinishTime();
            break;
        case '/robbery/index':
            Robbery.addAutoFarmButtons();
            break;
        case '/city/grotte':
            Grotte.addAutoFarmButtons();
    }
}
