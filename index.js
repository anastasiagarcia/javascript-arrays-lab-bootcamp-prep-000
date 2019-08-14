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

function destructivelyRemoveFirstKitten() {
  kittens.shift(kittens[0]); //you can remove the element by index number or as yuo did before with the name of the element
  return kittens;
}

//append a kitten to the kittens array and return a new kittens array leaving the kitten array unchanged

function appendKitten(name){
  return kitten.contact(kittens);
}