function highAndLow(str) {
    let array = str.split(' ');
    let i = 0, max_num = array[0], min_num = array[0];
    while (i < array.length) {
        if (max_num < +array[i]) {
            max_num = array[i]
        }
        i++;
    }

    i = 0;
    while (i < array.length) {
        if (min_num > +array[i]) {
            min_num = array[i];
        }
        i++;
    }

    return (max_num + " " + min_num);
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");