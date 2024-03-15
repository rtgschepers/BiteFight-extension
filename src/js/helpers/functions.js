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