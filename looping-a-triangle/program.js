let str = "";
const x = (y) => {
  for(let i =0;i<y;i++){
    for(let x=0;x<y;x++){
      if((x+i)%2 == 0){
        str+=" ";
      }
      else str+='#';
    }
    str+='\n';
  }
    
  console.log(str)
}
x(8);
