function createPhoneNumber(numbers){
  let firstThree = ""+ numbers[0]+numbers[1]+numbers[2];
  let secondThree = ""+ numbers[3]+numbers[4]+numbers[5];
  let lastFour = ""+ numbers[6]+numbers[7]+numbers[8]+numbers[9];
  
  return "("+firstThree+") "+secondThree+"-"+lastFour;
  
}