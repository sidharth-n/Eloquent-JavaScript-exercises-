let str = '#';
const x = (y) => {
  for(let i =0;i<y;i++){
    console.log(str);
    str = str + '#';
  }
}
x(7);