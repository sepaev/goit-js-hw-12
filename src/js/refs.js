export const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}
export const consts = {
    DEBOUNCE_DELAY: 300,
    INFO_MESSAGE: 'Too many matches found. Please enter a more specific name.',
    FAILURE_MESSAGE: 'Oops, there is no country with that name',
    BASE_URL: 'https://restcountries.eu/rest/v2/',
    BASE_URL_FIELDS: 'name;capital;population;flag;languages'
};