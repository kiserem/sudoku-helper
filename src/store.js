import { createStore} from "redux";
import selectValueReducer from "./reducers";

export default createStore(selectValueReducer);