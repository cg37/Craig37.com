const obj1 = {a: 1, b: 2}
const obj2 = {a: 1, b: 2}
const obj3 = {a: 1, b: 2}

function eqs(o1:any, o2:any) {
    if (o1 === o2) {
        return true
    }
    const key1 = Object.keys(o1);
    const key2 = Object.keys(o2);
    if (key1.length !== key2.length) {
        return false
    }
    for (let i of key1) {
        if (o1[i] !== o2[i]) return false;
    }
    return true
}
