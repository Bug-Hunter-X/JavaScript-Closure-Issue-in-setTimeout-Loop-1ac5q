function myFunction() {
  for (let i = 0; i < 10; i++) {
    (function(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunction();

//Alternative solution using let in the loop:

function myFunction2(){
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
myFunction2();