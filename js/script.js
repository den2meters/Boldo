"use strict";

let str = "ababc";
let c = 'c';


function firstToLast(str,c){
  let check = str.search(c);
  if ( check == -1) return check;
  
}

console.log(firstToLast(str, c));