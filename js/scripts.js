// // 3. current date ----------------------------------------------
// let d = new Date
// function format(n){
//     return n > 9 ? "" + n: "0" + n;
// }
// let month = format(d.getMonth() + 1);
// let day = format(d.getDate());
// let year = d.getFullYear()
// let result = month + "/" + day + "/" + year
// document.getElementById("1").innerHTML = result;


// // 4. triangle area -------------------------------------------------
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

// // 5. title shuffle ------------------------------------------------------------
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

// // 6. leap year -----------------------------------------------------------------
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

// // 8. random integer guess
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max)) + 1;
// }

// document.getElementById("1").innerHTML = "Guess a number between 1-10"
// const form = document.getElementById('form');
// const number = document.getElementById('number');
// form.onsubmit = submit;

// function submit(evt) {
//     let input = parseInt(document.getElementById("number").value);
//     let target = parseInt(getRandomInt(10));
//     if (input === target) {
//         document.getElementById("2").innerHTML = ""
//         document.getElementById("1").innerHTML = "Good Work!";
//     } else {
//         document.getElementById("2").innerHTML = "Not matched. The number was " + target;
//     }
//     console.log("!", target, "$", input);
//     event.preventDefault();
// }

// // 9. Xmas Countdown
// let monthDaysTotal = [31,28,31,30,31,30,31,31,30,31,30,31];
// let d = new Date();
// let month = d.getMonth()
// let date = d.getDate();
// let monthsLeft = 11 - month;
// let daysLeft = 24 - date;
// if (daysLeft < 0) {
//     daysLeft = monthDaysTotal[month] - daysLeft;
//     console.log(monthDaysTotal[month], daysLeft, monthDaysTotal[month] - daysLeft);
// } 
// document.getElementById("1").innerHTML = "There are " + monthsLeft + " months and " + daysLeft + " days left until Xmas"

// console.log(month, date, monthsLeft, daysLeft, monthDaysTotal[month]);
// // lost interrest moved on


// // 10. multiply divide 
// function multiNums() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = num1 * num2;
//     alert(result)
// }

// function diviNums() {
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     let result = num1 / num2;
//     alert(result)
// }

// // 11. temperature converter
// function celsiusToFahren() {
//     let c = document.getElementById("num1").value;
//     result = c * 9 / 5 + 32

//     alert(result);
// }

// function fahrenToCelsius() {
//     let f = document.getElementById("num2").value;
//     result = (f - 32) * 5/9
//     alert(result);
// }

// // 12. website URL
// console.log(document.URL);

// // 15. Difference of 13
// function diffThirteen() {
//     let n = document.getElementById("num1").value;
//     return (n > 13) ? alert(2 * Math.abs(13 - n)) : alert(13 - n)
// }

// // 16. Add or Equal
// function addOrEven() {
//     let x = parseInt(document.getElementById("num1").value);
//     let y = parseInt(document.getElementById("num2").value);
//     return (x === y) ? alert(x * 6) : alert(x + y)
// }

// // 17. absolutely different 19
// function absDiff19() {
//     let x = parseInt(document.getElementById("num1").value);
//     let result = Math.abs(x - 19);
//     return (result > 19) ? alert(result * 3) : alert(result);
// }

// // 18. fiftyOrNot
// function fiftyOrNot() {
//         let x = parseInt(document.getElementById("num1").value);
//         let y = parseInt(document.getElementById("num2").value);
//         return (x === 50 || y === 50 || x + y === 50) ? alert("true") : alert("false");
// }

// // 19. Four Hundred Club
// function fourHundredClub() {
//         let x = parseInt(document.getElementById("num1").value);
//         return (x >= 90 && x <= 110 || x >= 390 &&  x <= 410) ? alert("true") : alert("false");
// }

// // 20. Positive or Negative
// function posAndNeg() {
//         let x = parseInt(document.getElementById("num1").value);
//         let y = parseInt(document.getElementById("num2").value);  
//         return (x > 0 && y < 0 || y > 0 && x < 0) ? alert("true") : alert("false");
// }

// // 21. Py Contest
// function pyContest() {
//         let x = document.getElementById("num1").value;
//         return (x.slice(0,2) === "Py") ? alert(x) : alert("Py" + x)
// }

// // 22. Character Remove
// function charRemove() {
//         let x = document.getElementById("num1").value;
//         let y = parseInt(document.getElementById("num2").value); 
//         let arr = x.split('')
//         arr.splice(y, 1);
//         alert(arr.join(''));
// }

// 23. Character Reverse
function charReverse() {
        let x = document.getElementById("num1").value;
        let arr1 = x.split('');
        let firstChar = arr1.shift();
        let lastChar = arr1.pop();
        arr1.unshift(lastChar);
        arr1.push(firstChar);
        alert(arr1.join(''))
}

// // 24. charsAdd
// function charsAdd() {
//         let x = document.getElementById("num1").value.split('');
//         let firstChar = x[0];
//         x.push(firstChar);
//         x.unshift(firstChar);
//         result = x.join('');
//         return alert(result);
// }

// // 25. Divisible by 3 or 7
// function divByThreeOrSeven() {
//         let y = parseInt(document.getElementById("num2").value);
//         return (y % 3 === 0 || y % 7 === 0) ? alert("True") : alert("False");
// }

// // 26. Last Three Chars
// function lastThreeChars() {
//         let x = document.getElementById("num1").value.split('');
//         if (x.length >= 3) {
//                 let lastThree = x.slice(x.length - 3)
//                 x.push(lastThree)
//                 x.unshift(lastThree)
//                 return alert(x)
//         }
//         return alert("Need at least 3 letters");
// }

// 27. Java First
function javaFirst() {
        let x = document.getElementById("num1").value;
        let firstFour = x.slice(0,4);
        return (firstFour === "Java") ? alert("Java Baby") : alert("Where's the Java?");
}