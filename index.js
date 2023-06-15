let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  })
 // code to destructively add ralph to end of cats array
  function destructivelyAppendCat (cats) {
    return cats.push(`Ralph`)
  }  

  //code to add  bob to beginning of cats array
  function prependCat(cats) {
    return cats.unshift(`bob`)
  }

  //code to remove last cat name 
  function destructivelyRemoveLastCat(cats) {
    return cats.splice(-1)
  }

  //code to remove first cat 
  function destructivelyRemoveFirstCat(cats) {
    return cats.splice(0,1)  
  }
//code to add cat to a new array without changing old
  let newCats
  function appendCat(cats) {
    return newCats=[...cats, `broom`]
  }

  //code to prepend cat to a new array without changing old
  function prependCat(cats) {
    return newCats = [`arnold`, ...cats]
  }

  



  
  
