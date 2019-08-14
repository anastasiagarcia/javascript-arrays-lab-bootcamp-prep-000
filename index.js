var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

// destructively adding elements to the end .push() and to the beginning .unshift()

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
  
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

//destructively removing elements from the end .pop() and from the beginning .shift()

function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield");
  return kittens;
}

