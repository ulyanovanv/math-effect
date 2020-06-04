

export const array_rand = (array) =>
{
    return array[Math.floor(Math.random()*array.length)];
}


export const createMap = (array) => {
    let map = {};
    // eslint-disable-next-line
    array.map(unit => {
        const { x, y } = unit;
        if (typeof map[y] === "undefined") map[y] = {};
        if (typeof map[y][x] === "undefined") map[y][x] = unit;
        else {
            console.log('Error creating map');
        }
    });
    return map;
};


export const uniqueArray = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        if (typeof pos == "object" && typeof arr.indexOf(elem) === "object") {
            return JSON.stringify(pos) === JSON.stringify(arr.indexOf(elem));
        } else {
            return arr.indexOf(elem) === pos;
        }
    });
};