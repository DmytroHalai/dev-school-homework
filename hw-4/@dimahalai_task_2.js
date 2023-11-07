class Vector {
    constructor(components) {
        this.components = components;
    }

    add(otherVector) {
        if (this.components.length !== otherVector.components.length) {
            throw new Error();
        }

        const result = this.components.map((value, index) => value + otherVector.components[index]);
        return new Vector(result);
    }

    subtract(otherVector){
        if (this.components.length !== otherVector.components.length){
            throw new Error();
        }
        const result = this.components.map((value, index) => value - otherVector.components[index]);
        return new Vector(result);
    }

    dot(otherVector){
        if (this.components.length !== otherVector.components.length){
            throw new Error();
        }
        return this.components.reduce((sum, value, index) => sum + value * otherVector.components[index], 0);
    }

    norm(){
        const result = this.components.reduce((sum, value) => sum + value*value, 0);
        return Math.sqrt(result);
    }

    toString(){
        return `(${this.components.join(',')})`;
    }

    equals(otherVector){
        let boolean = true;
        for (let i = 0; i < this.components.length; i++){
            if (this.components[i] !== otherVector.components[i]){
                boolean = false;
                break;
            }
        }
        return boolean;
    }

}



