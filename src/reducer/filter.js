import {
    CHANGE_CHECKED,
    SEARCH_BY_TERM,
    SEARCH_BY_SUN,
    SEARCH_BY_HEART,
    SEARCH_BY_FLASH,
    SEARCH_BY_FLOWER
} from '../constants'
const defaultState = {
    checked: false,
    searchTerm: '',
    isCheckedSun: {checked: false, value: 'sun'},
    isCheckedHeart: {checked: false, value: 'heart'},
    isCheckedFlash: {checked: false, value: 'flash'},
    isCheckedFlower: {checked: false, value: 'flower'}
}


export default (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CHANGE_CHECKED:
            return {...state, checked: payload.isChecked};
        case SEARCH_BY_TERM:
            return {...state, searchTerm: payload.searchTerm};
        case SEARCH_BY_SUN: {
            let tmp = {...state.isCheckedSun, checked: payload.isChecked};
            return {...state, isCheckedSun: tmp}
        }
        case SEARCH_BY_HEART: {
            let tmp = {...state.isCheckedHeart, checked: payload.isChecked};
            return {...state, isCheckedHeart: tmp}
        }
        case SEARCH_BY_FLASH: {
            let tmp = {...state.isCheckedFlash, checked: payload.isChecked};
            return {...state, isCheckedFlash: tmp}
        }
        case SEARCH_BY_FLOWER: {
            let tmp = {...state.isCheckedFlower, checked: payload.isChecked};
            return {...state, isCheckedFlower: tmp}
        }
        default:
            return state
    }
}
