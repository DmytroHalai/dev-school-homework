function findNb (m){
    let max_count = 0;
    let n = 0;
    while ( max_count < m) {
        let point = -2;
        max_count = 0;
        while (point < n) {
            point++;
            max_count += (n - point) ** 3;

        }
        n++;
    }
    if (max_count === m){
        return n;
    }
    else {
        return -1;
    }
}

console.log(findNb(2621484810000));