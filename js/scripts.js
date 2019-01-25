// // current date ----------------------------------------------
// let d = new Date
// function format(n){
//     return n > 9 ? "" + n: "0" + n;
// }
// let month = format(d.getMonth() + 1);
// let day = format(d.getDate());
// let year = d.getFullYear()
// let result = month + "/" + day + "/" + year
// document.getElementById("1").innerHTML = result;


// // triangle area -------------------------------------------------
// function triArea(a,b,c) {
//     let p = (a + b + c) / 2;
//     let pa = p-a
//     let pb = p-b
//     let pc = p-c
//     let pabc = pa * pb * pc;
//     let result = Math.sqrt(p * pabc);  
//     // console.log(result);
//     // console.log(pabc, p, 24 * 9, Math.sqrt(216));
//     return result;
// }
// let final = triArea(5,6,7);

// // title shuffle ------------------------------------------------------------
// function shuffleLetters() {
//     let s = document.getElementById("1").innerHTML;
//     let letters = s.split("");
//     let var1 = letters.shift();
//     letters.push(var1);
//     let result = letters.join('');
//     document.getElementById("1").innerHTML = result;
//     return result
// }
// document.getElementById("1").innerHTML = "w3source";
// var timer = setInterval(shuffleLetters, 500);

// // leap year -----------------------------------------------------------------
// let d = new Date();
// let year = d.getFullYear();
// function leapYear(y) {
//     if (y % 4 !== 0) {
//         return false;
//     }else if (y % 100 !== 0) {
//         return true;
//     } else if (y % 400 !== 0) {
//         return false;
//     }
//     return true;
// }

// console.log(leapYear(1965));
// if (leapYear(1964)) {
//     document.getElementById("1").innerHTML = "That is a leap year";
// } else {
//     document.getElementById("1").innerHTML = "That is NOT a leap year";

// }

// random integer guess
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

document.getElementById("1").innerHTML = "Guess a number between 1-10"
const form = document.getElementById('form');
const number = document.getElementById('number');
form.onsubmit = submit;

function submit(evt) {
    let input = parseInt(document.getElementById("number").value);
    let target = parseInt(getRandomInt(10));
    if (input === target) {
        document.getElementById("2").innerHTML = ""
        document.getElementById("1").innerHTML = "Good Work!";
    } else {
        document.getElementById("2").innerHTML = "Not matched. The number was " + target;
    }
    console.log("!", target, "$", input);
    event.preventDefault();
}
