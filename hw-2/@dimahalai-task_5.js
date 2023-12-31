function getRootProperty(obj, num) {
    for (let key in obj) {
        if (Array.isArray(obj[key]) && obj[key].includes(num)) {
            return key;
        } else if (typeof obj[key] === 'object') {
            let result = getRootProperty(obj[key], num);
            if (result) {
                return key;
            }
        }
    }
    return null;
}

let object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

console.log(getRootProperty(object, 25));