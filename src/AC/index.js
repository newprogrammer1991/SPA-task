import {
    LOAD_ALL_ITEMS,
    SHOW_INFO,
    CHANGE_CHECKED,
    SEARCH_BY_TERM,
    SEARCH_BY_SUN,
    SEARCH_BY_HEART,
    SEARCH_BY_FLOWER,
    SEARCH_BY_FLASH,
    DELETE_FROM_DRAG_SOURCE,
    ADD_TO_DROP_TARGET,
    SET_ACTIVE,
    TYPES
} from '../constants'

export function setActiveCard(id) {
    return {
        type: SET_ACTIVE,
        payload: {id}
    }
}

export function loadAllItems() {
    return {
        type: LOAD_ALL_ITEMS,
        callApi: '/api/items'
    }
}
export function showInfo(item) {
    return {
        type: SHOW_INFO,
        payload: {item}
    }
}


export function checkedChange(isChecked) {
    return {
        type: CHANGE_CHECKED,
        payload: {isChecked}
    }
}

export function searchItems(searchTerm) {
    return {
        type: SEARCH_BY_TERM,
        payload: {searchTerm}
    }
}

export function checkedSun(isChecked) {
    return {
        type: SEARCH_BY_SUN,
        payload: {isChecked}
    }
}
export function checkedHeart(isChecked) {
    return {
        type: SEARCH_BY_HEART,
        payload: {isChecked}
    }
}
export function checkedFlower(isChecked) {
    return {
        type: SEARCH_BY_FLOWER,
        payload: {isChecked}
    }
}
export function checkedFlash(isChecked) {
    return {
        type: SEARCH_BY_FLASH,
        payload: {isChecked}
    }
}
export function deleteFromDragSource(item) {
    return {
        type: DELETE_FROM_DRAG_SOURCE,
        payload: {item}
    }
}
export function addToDropTarget(item) {
    return {
        type: ADD_TO_DROP_TARGET,
        payload: {item}
    }
}