const _ = {

    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (!end) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let change = start;
        start = end;
        end = change;
      }
      let isInRange = (start <= number && number < end);
      return isInRange;
    },
    
    words(string) {
      return string.split(' ');
    },
  
    pad(string, length) {
      if (string.length >= length) return string;
      let before = Math.floor(length/2);
      let after = Math.round(length/2);
      for (let i=1; i<before; i++) string = ' '+string;
      for (let i=1; i<after; i++) string += ' ';
      return string;
    },
  
    has(obj, key) {
      return obj[key] ? true : false;
    },
  
    invert(obj) {
      let invObj = {};
      for (let key in obj) {
        let temp = obj[key];
        invObj[temp] = key;
      }
      return invObj;
      
    },
  
    findKey(obj, fn) {
      for (let prop in obj) {
        if (fn(obj[prop]) == true) {
          return prop;
        }
      }
      return undefined;
    },
  
    drop(arr, itens) {
      if(!itens) itens = 1;
      let newArray = arr.slice(itens);
      return newArray;
    },
  
    dropWhile(arr, fn) {
       let dropNumber = arr.findIndex((element, index) => {
         let temp = fn(element, index, arr);
         return !temp;
       });
       let droppedArray = this.drop(arr, dropNumber);
       return droppedArray;
    },
  
    chunk(arr, size) {
      if (!size) size = 1;
      let chunked = [];
      for (let i=0; i<arr.length; i += size) {
        let arrayChunk = arr.slice(i,i+size);
        chunked.push(arrayChunk);
      }
      return chunked;
    }
  
  };
  
  

  
obj = {myKey:'valor'};
arr = ['oi','hi','tchau','hola'];


console.log(_.chunk(arr,2));

  
  // Do not write or modify code below this line.
  module.exports = _;