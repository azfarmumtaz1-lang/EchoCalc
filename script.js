let display =
document.querySelector(".display input");  
let buttons =
document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click",
        function() {
            if (button.innerText == "C") {
                display.value = "";
            }
            else if (button.innerText == "=") {
                display.value = 
            eval(display.value);
            }
            else {
                display.value += button.innerText;
            }
        });
    });