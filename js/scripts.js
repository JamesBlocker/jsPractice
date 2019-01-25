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

// title shuffle
function shuffleLetters() {
    let s = document.getElementById("1").innerHTML;
    let letters = s.split("");
    let var1 = letters.shift();
    letters.push(var1);
    let result = letters.join('');
    document.getElementById("1").innerHTML = result;
    return result
}

document.getElementById("1").innerHTML = "w3source";

var timer = setInterval(shuffleLetters, 500);