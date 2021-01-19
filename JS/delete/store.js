import {createStore} from 'redux'
import noteReducer from './NotesApp'
const store = createStore(noteReducer)

export default store 