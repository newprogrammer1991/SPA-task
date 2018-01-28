import {combineReducers} from 'redux'
import cards from './cards'
import filter from './filter'

export default combineReducers({
    cards, filter
})