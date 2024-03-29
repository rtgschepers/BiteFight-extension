import Profile from "./pages/Profile.js";
import Robbery from "./pages/Robbery.js";
import Graveyard from "./pages/Graveyard.js";
import Grotte from "./pages/Grotte.js";
import {loadTranslations} from "./helpers/functions.js";
import AllPages from "./pages/AllPages.js";

export async function main() {
    await loadTranslations('nl');
    AllPages.stylizationFixes();

    let pathname = window.location.pathname;
    pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    switch (pathname) {
        case '/profile':
        case '/profile/index':
            Profile.enhanceIndex();
            break;
        case '/city/graveyard':
            Graveyard.displayWorkFinishTime();
            break;
        case '/user/working':
            Graveyard.displayCurrentWorkFinishTime();
            break;
        case '/robbery/index':
            Robbery.capitalizeFarmText();
            Robbery.addAutoFarmButtons();
            break;
        case '/city/grotte':
            Grotte.addAutoFarmButtons();
    }
}
