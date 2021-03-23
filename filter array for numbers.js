function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArray = [];
    for (let i=0; i < l.length; i++){
      if(typeof l[i] === 'number' && isFinite(l[i])){
        let count = newArray.push(l[i]);
      }
    }
    console.log(newArray);
    return newArray;
}

/* Best Practices Solution

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

*/ 