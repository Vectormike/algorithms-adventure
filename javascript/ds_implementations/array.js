class CustomArray {
  constructor() {
    (this.data = {}), (this.length = 0);
  }

  // getting the element of the array using the index
  access(index) {
    return this.data[index];
  }

  // add elements to the array
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const lastValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastValue;
  }
}

const newArray = new CustomArray();
newArray.push("first item");
newArray.push("second item");
newArray.push("third item");
newArray.pop();
console.log(newArray);
