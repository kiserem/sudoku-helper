export const SELECT_VALUE = 'SELECT_VALUE'

export function selectValue(value_selected) {
    return {
        type: SELECT_VALUE,
        value_selected
    }
}