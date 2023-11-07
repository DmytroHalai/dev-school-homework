function unpackSausages(truck) {
    const sausages = [];

    for (let box of truck) {
        for (let product of box) {
            if (product === "[IIII]") {
                sausages.push("I I I I");
            } else if (product === "[))))]") {
                sausages.push(") ) ) )");
            } else if (product === "[llll]") {
                sausages.push("l l l l");
            } else if (product === "[@@@@]") {
                sausages.push("@ @ @ @");
            } else if (product === "[║║║║]") {
                sausages.push("║ ║ ║ ║");
            } else if (product === "[1111]") {
                sausages.push("1 1 1 1");
            } else if (product === "[||||]") {
                sausages.push("| | | |");
            }
        }
    }
    for (let i = 1; i <= sausages.length; i++){
        if (i % 5 === 0){
            sausages.splice(i - 1, 1);
        }
    }

    return sausages.join(' ');
}

console.log(unpackSausages([["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"]]));






