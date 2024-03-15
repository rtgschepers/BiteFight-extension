import Robbery from "./modules/Robbery.js";
import Graveyard from "./modules/Graveyard.js";

export function main() {
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
    }
}
