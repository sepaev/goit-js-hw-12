import './sass/main.scss';
import { debounce } from "debounce";
import { fetchCountries } from "./js/fetchCountries";
import listTpl from './templates/list.hbs';
import infoTpl from './templates/info.hbs';

const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;


const onChange = e => {
    fetchCountries(e.srcElement.value).then(countries => {
        const len = countries.length;
        if (len === 0) return [];
        if (len === 1) {
            
            let country = countries[0];
            let stringLanguages = '';
            country.languages.forEach(lang => {
                stringLanguages += lang.name+',';
            });
            country.stringLanguages = stringLanguages.slice(0, -1);
            createInfo(country);
        }
        if(len>1 && len <= 10) {
            createlist(countries);
            return countries;
        }
        if (len>10){
            refs.countryList.innerHTM = '';
            refs.countryInfo.innerHTML = '<p>Too many matches found. Please enter a more specific name.</p>';
        }
    })
    .catch(e => console.log(e));;
}

refs.searchBox.addEventListener('input',
  debounce((e) => {
    onChange(e);
  }, DEBOUNCE_DELAY))

  const createlist = (obj) => {
      refs.countryList.innerHTML = obj.map(el => listTpl(el)).join('');
      refs.countryInfo.innerHTML = '';
}
  const createInfo = (arr) => {
      refs.countryInfo.innerHTML = infoTpl(arr);
      refs.countryList.innerHTML = '';
}