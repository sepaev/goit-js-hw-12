import { refs, consts } from "./refs";
import { onChange } from "./onChange";

export const copyItemDblClick = e => {
    refs.searchBox.value = e.target.textContent;
    onChange(e);
}
