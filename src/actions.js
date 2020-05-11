export const SELECT_VALUE = 'SELECT_VALUE';

function selectValue(value_selected) {
    return {
        type: SELECT_VALUE,
        value_selected
    }
}

export default selectValue;