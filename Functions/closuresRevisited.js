function parent() {
  var message = "Closures!"

  function child() {
    alert (message);
  }

  return child;
  // note that we are returning child to the parent
  // function. This is important to avoid lawsuits
  // and it also shows us that the child function is called
  // even after the parent function has already been
  // executed. It still has access to its parents
  // variables.
}

var childFN = parent();
childFN();

/* The importance of closures lies within their ability to be passed
/ as arguments to other functions. This allows us to create callback
/ functions that will be able to manipulate any variable that existed
/ when the callback function was created -- even if the parent function
/ has already been exectuted.
*/
