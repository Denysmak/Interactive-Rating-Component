let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let submit = document.getElementById("submit");
let first = document.getElementById("first");
let second = document.getElementById("second");
let selected = document.getElementById("selected")
let estrelas; 


// This makes que main div change when we click the button





// Makes the number/button get orange when we click on it, and makes the other numbers to have the same background
one.addEventListener("click", function(){
this.style.backgroundColor = "orange"
this.style.color = "white"
two.style.backgroundColor = "hsl(213, 20%, 22%)"
three.style.backgroundColor = "hsl(213, 20%, 22%)"
four.style.backgroundColor = "hsl(213, 20%, 22%)"
five.style.backgroundColor = "hsl(213, 20%, 22%)"

estrelas = 1;




})


two.addEventListener("click", function () {
    this.style.backgroundColor = "orange"
    this.style.color = "white"
    one.style.backgroundColor = "hsl(213, 20%, 22%)"
    three.style.backgroundColor = "hsl(213, 20%, 22%)"

    four.style.backgroundColor = "hsl(213, 20%, 22%)"

    five.style.backgroundColor = "hsl(213, 20%, 22%)"
 
   estrelas = 2;

})
three.addEventListener("click", function () {
    this.style.backgroundColor = "orange"
    this.style.color = "white"
    one.style.backgroundColor = "hsl(213, 20%, 22%)"
    two.style.backgroundColor = "hsl(213, 20%, 22%)"

    four.style.backgroundColor = "hsl(213, 20%, 22%)"

    five.style.backgroundColor = "hsl(213, 20%, 22%)"

 estrelas = 3;

})

four.addEventListener("click", function () {
    this.style.backgroundColor = "orange"
    this.style.color = "white"
    one.style.backgroundColor = "hsl(213, 20%, 22%)"
    three.style.backgroundColor = "hsl(213, 20%, 22%)"

    two.style.backgroundColor = "hsl(213, 20%, 22%)"

    five.style.backgroundColor = "hsl(213, 20%, 22%)"

   estrelas = 4;

})

five.addEventListener("click", function () {
    this.style.backgroundColor = "orange"
    this.style.color = "white"
    one.style.backgroundColor = "hsl(213, 20%, 22%)"
    three.style.backgroundColor = "hsl(213, 20%, 22%)"

    four.style.backgroundColor = "hsl(213, 20%, 22%)"

    two.style.backgroundColor = "hsl(213, 20%, 22%)"

   estrelas = 5;
  

})

// ======================

submit.addEventListener("click", function () {

    first.style.display = "none"
    second.style.display = "inline-block"
    // estrelas.style.color = "rgb(255, 123, 0)"
  
    
    

    selected.innerHTML = "You selected " + estrelas + " out of 5"
})