import './sass/main.scss';
import { debounce } from "debounce";
import { onChange } from "./js/onChange";
import { refs, consts } from "./js/refs";

refs.searchBox.addEventListener('input',
  debounce((e) => {
    onChange(e);
  }, consts.DEBOUNCE_DELAY))

