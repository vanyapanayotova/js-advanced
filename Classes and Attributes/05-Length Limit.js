class Stringer {
    constructor(string, lenght) {
      this.innerString = string;
      this.innerLength = lenght;
    }
   
    increase(num) {
      this.innerLength += num;
    }
   
    decrease(num) {
      if (this.innerLength - num < 0) {
        this.innerLength = 0;
      } else {
        this.innerLength -= num;
      }
    }
   
    toString() {
      if (this.innerLength < this.innerString.length) {
        return this.innerString.substring(0, this.innerLength) + '...';
      } else {
        return this.innerString;
      }
    }
  }