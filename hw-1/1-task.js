function solution(num) {
    let result = 0;

    for (let b = 0; b < num; b++) {
        if (b % 3 === 0 || b % 5 === 0) {
            result += b;
        }
    }
    return result;
}

console.log(solution(45));