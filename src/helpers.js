export const arrToMap = (arr) => {
    return arr.reduce((acc, item) => {
        let newId = getId();
        acc[newId] = {...item, id: newId};
        return acc
    }, {})
};
export const mapToArr = (obj) => {
    const arr = Object.keys(obj);
    return arr.map(item => obj[item])
}

const getId = () => {
    return Date.now() + Math.random().toString();
};
