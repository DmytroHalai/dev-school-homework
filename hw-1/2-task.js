let num = 50, begin = 0, result = 0;

while (begin < num){
    result = 2 * result + 1;
    begin++;
}

console.log("Мінімальна кількість ходів для перемоги у грі: " + result);