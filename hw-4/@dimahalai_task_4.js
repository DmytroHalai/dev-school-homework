class PaginationHelper {
    constructor(countOfEl, number) {
        this.countOfEl = countOfEl;
        this.number = number;
        this.arraySize = this.countOfEl.length;
    }
    itemCount() {
        return this.arraySize;
    }
    pageCount() {
        return this.arraySize % this.number === 0 ? Math.floor(this.arraySize / this.number) : Math.floor(this.arraySize / this.number + 1);
    }
    pageItemCount(pageIndex) {
        let pageCount = this.arraySize % this.number === 0 ? Math.floor(this.arraySize / this.number) : Math.floor(this.arraySize / this.number) + 1;
        if (pageIndex >= pageCount || pageIndex < 0){
            return -1;
        }
        else if((pageIndex + 1) * this.number <= this.arraySize){
            return this.number;
        }
        else if(this.arraySize % this.number === 0){
            return this.number;
        }
        else if((pageIndex + 1) * this.number > this.arraySize){
            return this.arraySize % this.number;
        }
    }
    pageIndex(itemIndex) {
        if (itemIndex < this.arraySize && itemIndex >= 0) {
            return Math.floor(itemIndex / this.number);
        } else return -1;
    }
}