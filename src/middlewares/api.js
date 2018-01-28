import {START, SUCCESS, FAIL} from '../constants'
export default store => next => action => {
    const {callApi, type, ...rest} = action;
    if (!callApi)return next(action);
    next({...rest, type: type + START});
    setTimeout(() => {
        fetch(callApi)
            .then(response => response.json())
            .then(result => next({...rest, type: type + SUCCESS, result}))
            .catch(error => next({...rest, type: type + FAIL, error}))
    }, 1000)
};
