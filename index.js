function mapToNegativize(array){
  return array.map(x => x * -1)
}

function mapToNoChange(array){
  return array.map(x => x)
}

function mapToDouble(array){
  return array.map(x => x * 2)
}

function mapToSquare(array){
    return array.map(x => x * x)
}

function reduceToTotal(array,initialValue = 0){
 let sum =   array.reduce((acc,value,array,initialValue) => acc + value,initialValue)
  return sum
}

function reduceToAllTrue(array){
  const reducer = function(acc, value){  
    if(!!acc == true && !!value == true){
        return true;
    } else {
        return false;
      }
  }
    return array.reduce(reducer, true)
}
function reduceToAnyTrue(array){
    const reducer = function(acc, value){  
        if(acc == true){
            return true
        } else {
            return !!value
        } 
    }
    return array.reduce(reducer, false)

}
