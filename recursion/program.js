function isEven(a){
  a = Math.abs(a);
  if (a == 0) return true;
  if(a==1) return false;
  else {
    console.log(a);
    return isEven(a-2);
  }
}