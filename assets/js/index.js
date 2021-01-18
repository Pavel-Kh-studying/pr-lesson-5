'use sctict'; 

// const arr = [1, 44, 55, 2, 56, 71, 23, 18, 45];

// const binarySearch = (arr, value) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.round(arr.length / 2);

//   while (true) {
//     if (value === arr[middle]) {
//       return middle;
//     }
//     if (value > arr[middle]) {
//       start = middle;
//       middle = Math.ceil((end + start) / 2);
//     } else {
//       end = middle;
//       middle = Math.floor((end - start) / 2);
//     }
//   }
// }

class Stack {
  constructor(maxSize = 1000, ...args) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of args) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this._size++}`] = value;
    return this._size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${--this._size}`];
    delete this[`_${this._size}`];
    return lastItem;
  }

  pick() {
    if (this.isEmpty) {
      return;
    }

    return this[`_${this._size - 1}`];
  }
}

// const stack = new Stack();

const checkSequence = (str) => {
  str = str.split('');
  const stack = new Stack(str.length, str);
  const brackets = ['(', ')', '[', ']'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (str[i] === brackets[j]) {
        stack.push(str[i]);
      }
    }
  }
  return stack;
  // return stack();


  // return stack.isEmpty;
}