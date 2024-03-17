let i18n = null;

export function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function translate(key) {
    if (i18n && i18n[key]) {
        return i18n[key];
    }
    return key;
}

export async function loadTranslations(lang) {
    try {
        const data = await fetch(chrome.runtime.getURL(`/i18n/${lang}.json`));
        i18n = await data.json();
    } catch(e) {
        i18n = null;
    }
}

export function formatEndTime(timeStr) {
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

export function getDataFromTab(tabId) {
    const cells = document.querySelectorAll(`#${tabId} td:nth-child(2)`);
    return Array.from(cells).map(cell => cell.textContent);
}