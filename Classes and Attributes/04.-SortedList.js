class List {
    constructor() {
        this.arr = []
        this.size = 0
    }
    add(element) {
        this.size++;
        this.arr.push(element)
        return this.arr.sort((a, b) => a - b)
    }
    remove(index) {
        if (index > this.arr.length - 1 || index < 0) throw new Error
        this.size--
        return this.arr.splice(index, 1)
    }
    get(index) {
        if (index > this.arr.length - 1 || index < 0) throw new Error
        return this.arr[index]
    }
}