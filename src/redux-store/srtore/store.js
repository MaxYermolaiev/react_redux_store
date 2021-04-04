import {createStore} from 'redux'
import reduser from "../reducers/reduser";
const store = createStore(reduser)
export default store;