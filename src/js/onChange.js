import { fetchCountries } from "./fetchCountries";
import { refs, consts } from "./refs";
import listTpl from '../templates/list.hbs';
import infoTpl from '../templates/info.hbs';
import Notiflix from "notiflix";    



export const onChange = e => {
    let inputValue = e.srcElement.value.trim();
    if (inputValue === '') { 
        createlist({ error: ' ' });
        Notiflix.Notify.warning(consts.FAILURE_MESSAGE);
    } else {
        fetchCountries(inputValue)
            .then(countries => {
                const len = countries.length;
                if (len === 0) {
                    Notiflix.Notify.failure(consts.FAILURE_MESSAGE);
                    // Promise.reject(new Error(consts.FAILURE_MESSAGE));
                };
                if (len === 1) {
                    let country = countries[0];
                    let stringLanguages;
                    country.languages.forEach(lang => {
                        stringLanguages += lang.name + ',';
                    });
                    country.stringLanguages = stringLanguages.slice(0, -1);
                    createInfo(country);
                }
                if (len > 1 && len <= 10) {
                    createlist(countries);
                    return countries;
                }
                if (len > 10) {
                    createlist({ error: ' ' });
                    Notiflix.Notify.info(consts.INFO_MESSAGE);
                }
            })
            .catch(e => console.log(e));
        // net
    };
}

const createlist = (obj) => {
    if (obj.error) {
      refs.countryList.innerHTML = `<li class="country-list__item">${obj.error}</li>`;
        refs.countryInfo.innerHTML = '<p></p>';
        return;
    }
      refs.countryList.innerHTML = obj.map(el => listTpl(el)).join('');
      refs.countryInfo.innerHTML = '<p></p>';
}
const createInfo = (arr) => {
      refs.countryInfo.innerHTML = infoTpl(arr);
      refs.countryList.innerHTML = '<p></p>';
}