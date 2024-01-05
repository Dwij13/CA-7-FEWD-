import {legacy_createStore as createStore} from "redux"
import Reducer from "./Reducer"
export const myStore = createStore(Reducer)