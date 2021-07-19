import './sass/main.scss';
import { debounce } from "debounce";
import { onChange } from "./js/onChange";
import { copyItemDblClick } from "./js/copyItemDblClick";
import { refs, consts } from "./js/refs";


refs.searchBox.addEventListener('input',
  debounce((e) => {
    onChange(e);
  }, consts.DEBOUNCE_DELAY))
refs.countryList.addEventListener('click',  e => {
  refs.searchBox.value = e.target.textContent;
  onChange(e);
});

