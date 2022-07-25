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

window.onload = () => {
   five.click()
   
}

// Makes the number/button get orange when we click on it, and makes the other numbers to have the same background
one.addEventListener("click", function(){
estrelas = 1;
   five.style.backgroundColor = "hsl(213, 20%, 22%)"
})


two.addEventListener("click", function () {
estrelas = 2;
})
three.addEventListener("click", function () {
 estrelas = 3;
})

four.addEventListener("click", function () {
 estrelas = 4;
})

five.addEventListener("click", function () {
   estrelas = 5;
})

submit.addEventListener("click", function () {
  
    if(estrelas > 0 ){

    first.style.display = "none"
    second.style.display = "inline-block"
   
  
    
    

    selected.innerHTML = "You selected " + estrelas + " out of 5"}
     else {
        first.style.display = "none"
        second.style.display = "inline-block"
  selected.innerText = "You haven't selected a number"

    }
})