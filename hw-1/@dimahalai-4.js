function isPrime(num){
    let check = 1, points = 0;

    while ((check <= num && num > 0)){
        if (num >= 0){
            if (num % check === 0){
                points += 1;
                check++;
            }
            else{
                check++;
            }
        }
        else{
            break
        }

    }

    return points === 2;
}

console.log(isPrime(0));