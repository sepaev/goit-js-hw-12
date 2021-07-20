import Notiflix from "notiflix";
import { consts } from "./refs"

export const fetchCountries = (name) => {
    Notiflix.Loading.hourglass()
    let countryUrl;
    if (name) { 
        countryUrl = `${consts.BASE_URL}/name/${name}?fields=${consts.BASE_URL_FIELDS}`;
    } else {
        countryUrl = `${consts.BASE_URL}/all`;
    }
    return fetch(countryUrl)
        .then(responce => {
            Notiflix.Loading.remove();
            if (responce.ok) {
                return responce.json()
            }
            else {
                // Promise.reject()
                return [];
            }
        })
        .then(data => data)
        .catch(e => e);

}