import { SELECT_VALUE} from "./actions";

function selectValueReducer(state={}, action){
    switch(action.type) {
        case SELECT_VALUE:
            return state;
        default:
            return state;
    }
}

export default selectValueReducer;
