function narcissistic(value) {
    // Code me to return true or false
    if(value <10 && value>=0 ){
      return true;
    }
    
    var varValue = value;
    let valueArr = Array.from(String(varValue), Number);
    var narcExp = valueArr.length;
    var narcTestSum = 0;
    
   //console.log(narcTestSum);
    console.log(valueArr);
     console.log(narcExp);
   for(let i=0; i < valueArr.length; i++){
      narcTestSum += Math.pow(valueArr[i],narcExp);
      console.log(valueArr[i]);
      console.log(narcTestSum);
    }
   
    if(narcTestSum == varValue){
      return true;
    }else{
      return false;
    }
    
  }
  
  console.log(narcissistic(371));