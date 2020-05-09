import { SELECT_VALUE} from "./actions";

function selectValueReducer(state={values: []}, action){
    switch(action.type) {
        case SELECT_VALUE:
            return Object.assign({}, state,
                {
                    values: [...state.values, action.values]
                });
        default:
            return state;
    }
}

export default selectValueReducer;