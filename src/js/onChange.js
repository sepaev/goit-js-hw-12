import { fetchCountries } from "./fetchCountries";
import { refs, consts } from "./refs";
import { createlist, createOneCountry } from "./create";

import Notiflix from "notiflix";    

Notiflix.Notify.init({
    distance: "50px",
    left: '600px',
  fontFamily: "Segoe UI",
  useGoogleFont: true,
//   useFontAwesome: true,
  fontAwesomeIconStyle: "shadow",
  fontAwesomeIconSize: "24px",
  position:"right-top",
});

export const onChange = e => {
    let inputValue
    if (!e.srcElement.value) {
        inputValue = e.target.textContent.trim();
     
    } else {
        inputValue = e.srcElement.value.trim();
    }
    for ( let  i = 0; i < inputValue.length; i++) {
        if ( parseInt(inputValue[i]) ) {
            Notiflix.Notify.failure(consts.FAILURE_MESSAGE);
            createlist({ error: ' ' });
            return;
        }
    };
    if (inputValue.length < 2) {
        createlist({ error: ' ' }); //для вывода ошибки на экран
        if (inputValue.length!==0) Notiflix.Notify.info(consts.INFO_MESSAGE);
        return;
    }
    fetchCountries(inputValue)
        .then(countries => createHtml(countries))
        .catch(e => console.log(e));

};
const createHtml = countries => {
    const len = countries.length;
    if (len === 0) {
        createlist({ error: ' ' }); //для вывода ошибки на экран
        Notiflix.Notify.failure(consts.FAILURE_MESSAGE);
    };
    if (len > 1 && len <= 10) {
        if (refs.searchBox.value === 'Georgia') {
            createOneCountry(countries[0]);
        } else {
            createlist(countries);
        }
    }
    if (len === 1)
    { createOneCountry(countries[0]) };

    if (len > 10) {
        createlist({ error: ' ' }); //для вывода ошибки на экран
        Notiflix.Notify.info(consts.INFO_MESSAGE);
    }
}




