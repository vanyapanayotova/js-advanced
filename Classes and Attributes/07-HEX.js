class Hex{
    constructor(value){
        this.value = Number(value)
    }
    valueOf(){
        return this.value
    }
    plus(number){
        return new Hex(this.value + number)
    }
    minus(number){
        return new Hex(this.value - number)
    }
    parse(string){
        return parseInt(string,16)
    }
    toString(){
        return '0x' + this.value.toString(16).toUpperCase()
    }
}