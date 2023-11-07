function maxHonnor(arr, d){
let n = arr.length;
let arr2 = new Array(n / d);
for (let i = 0; i < arr2.length; i++){
    arr2[i] = 0;
}

for (let i = 0; i < (n / d); i++){
    let a = 0;
    let b = 0;
    let groupAmount = n/d;
    while (b < d){
        arr2[i] += arr[a + i];
        a += groupAmount;
        b++;
    }
}

let result = 0;
if (d !== n){
    result= arr2.reduce((a, b) => Math.max(a, b), -Infinity);
}
else {
    for (let i = 0; i < n; i++){
        result += arr[i];
    }
}
return result
}

console.log(maxHonnor([24, 1, 0, 2, 4, 6, 7, 8, 3],3));