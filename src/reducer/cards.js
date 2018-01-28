import {
    LOAD_ALL_ITEMS,
    START,
    SUCCESS,
    FAIL,
    SHOW_INFO,
    DELETE_FROM_DRAG_SOURCE,
    ADD_TO_DROP_TARGET,
    SET_ACTIVE
} from '../constants'
import {arrToMap, mapToArr} from '../helpers'

const defaultState = {
    loading: false,
    loaded: false,
    items: {left: {}, right: {}},
    error: '',
    showInfoItem: {},
    isShow: false,
    activeCard: ''
}
export default (state = defaultState, action) => {
    const {type, payload, result, error} = action;
    switch (type) {
        case LOAD_ALL_ITEMS + START:
            return {...state, loading: true};
        case LOAD_ALL_ITEMS + SUCCESS:
            let tmp = {...state.items, left: arrToMap(result), right: arrToMap(result)};
            return {...state, loading: false, loaded: true, items: tmp};
        case LOAD_ALL_ITEMS + FAIL:
            return {...state, loading: false, error: error};
        case SHOW_INFO:
            return {...state, isShow: true, showInfoItem: payload.item};
        case DELETE_FROM_DRAG_SOURCE: {
            const {card, type} = payload.item;
            let tmp = {...state.items[type]};
            delete tmp[card.id];
            tmp = {...state.items, [type]: tmp};
            return {...state, items: tmp};
        }
        case ADD_TO_DROP_TARGET: {
            const {card, type} = payload.item;
            let tmp = {...state.items[type]};
            tmp[card.id] = card;
            tmp = {...state.items, [type]: tmp};
            return {...state, items: tmp}
        }
        case SET_ACTIVE: {
            return {...state, activeCard: payload.id}
        }
        default:
            return state;
    }
}

