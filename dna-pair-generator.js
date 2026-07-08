function pairElement(string){
  let resultArr = [];
  for (let i =0 ; i <= string.length; i++){
    
    if (string[i] == "A"){
      resultArr.push(["A","T"]);
    } else if (string[i] == "T"){
      resultArr.push(["T","A"]);
      
    } else if (string[i] == "C"){
      resultArr.push(["C","G"]);
      
    } else if (string[i] == "G"){
      resultArr.push(["G","C"]);
      
    }
    
  }
  return resultArr;
} 
