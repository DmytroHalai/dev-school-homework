function findEvenIndex(arr){
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}
console.log(findEvenIndex([0, 2]))