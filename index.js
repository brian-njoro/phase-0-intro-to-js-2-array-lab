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
    return cats.slice(-1)
  }

  
  
