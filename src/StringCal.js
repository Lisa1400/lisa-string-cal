function add(string){
   
  let sum = 0;

  let str = string.split(/[,\n/;*%]/);
  str.forEach(element => {
   arguments = parseInt(element);
   if (arguments < 0) {
    throw new SyntaxError("you cannot enter a negative number")
  }
  if(string == ""){
    return 0;
  }
  sum += arguments;
  
})
  return sum; 
}




