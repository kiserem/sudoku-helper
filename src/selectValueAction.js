export const SELECT_VALUE = 'SELECT_VALUE';

function selectValue(cell_selected) {
    return {
        type: SELECT_VALUE,
        cell_selected: cell_selected
    }
}

export default (selectValue);