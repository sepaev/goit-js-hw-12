import { refs } from "./refs";
import listTpl from '../templates/list.hbs';
import infoTpl from '../templates/info.hbs';

export const createlist = (obj) => {
    if (obj.error) {
        showAndHide( refs.countryList,  refs.countryInfo, `<li class="country-list__item">${obj.error}</li>`)
        return;
    }
    showAndHide( refs.countryList,  refs.countryInfo, obj.map(el => listTpl(el)).join(''))
}
export const createOneCountry = country => {
    country.stringLanguages = '';
    country.languages.forEach(lang => {
        country.stringLanguages += lang.name + ',';
    });
    country.stringLanguages = country.stringLanguages.slice(0, -1);
    createInfo(country);
}

const createInfo = (country) => {
    showAndHide(refs.countryInfo, refs.countryList, infoTpl(country));
}

const showAndHide = (toShow, toHide, html) => {
    toShow.innerHTML = html;
    toHide.innerHTML = '<p> </p>';
}