import {combineReducers} from 'redux'
import PersonnelReducer from './PersonnelReducers'

export default combineReducers({
    Person: PersonnelReducer
})