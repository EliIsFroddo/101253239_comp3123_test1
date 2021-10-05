const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords = arr => {
    return new Promise(function(resolve, reject) {
        result = arr.filter(w => typeof w == "string");
        newArr = result.map(e => e.toLowerCase());
        resolve();
    });
}

lowerCaseWords(mixedArray).then(console.log(newArr));
  console.log("THIS FILE WORKS")


