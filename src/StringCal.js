function add(string){
   try{

    if(string == ""){
      return 0;
  }
 
  let sum = 0;

  let str = string.split(/[,\n/;*%]/);
  str.forEach(element => {
   arguments = parseInt(element);
   if (arguments < 0) {
    throw new SyntaxError("you cannot enter a negative number " + arguments)
  }
  sum += arguments;
})
  return sum; 
}

catch (error){
  console.log("ERROR: " + error) 
}
}