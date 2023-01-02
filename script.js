document.querySelector("body").addEventListener("load", getNum);
var num = 0

function getNum() {
     num = generateNum(20);
}

function reloadgame() {
    document.querySelector(".message").innerHTML = "Start guessing"
    document.querySelector(".guess").value = ""
    document.querySelector(".score").innerHTML = 20
    document.getElementById("bod").style.backgroundColor = "#222"
    getNum()
}

function generateNum(num) {
    return  Math.floor((Math.random() * num) + 1)
}

function reduce() {
    let val = parseInt(document.querySelector(".score").innerHTML) 
    val--
    document.querySelector(".score").innerHTML = val
}

function maincheck() {
    let val =  parseInt(document.querySelector(".guess").value)
    val !== NaN  ? document.querySelector(".message").innerHTML = "Please enter number" : "";
    val >= 21 ? document.querySelector(".message").innerHTML = "Number should be less than 20" : ""
    if(val > num && val < 21) {
        document.querySelector(".message").innerHTML = "Number is greater"
    } else if(val < num) {
        document.querySelector(".message").innerHTML = "Number is smaller"
    } else if(val == num) {
        document.querySelector(".message").innerHTML = "Number is Correct"
        document.getElementById("bod").style.backgroundColor = "#60b347"
    }
    reduce()
}

