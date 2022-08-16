// // // if (3<7){
// // //     console.log("yes, it's true.")
// // // }

// // var myName = "Joinal";
// // if (myName === "Joinal"){
// //     console.log("Great! Joinal keep doing, Please!")
// // }


// let age = 34;
// if (age > 18){
//     if(age > 60){
//         console.log("you are old man.");
//     }else if (age >30){
//         console.log ("you are complete grown man");
//     }else {
//         console.log("you are child");
//     }

// }else {
//     console.log("you are not allowed");
// }

// let myNumber = 10;
// if (myNumber < 5){
//     console.log("you are in up!");
// } else if (myNumber < 13){
//     console.log("you are in down");
// }else {
//     console.log("Both are null");
// }

let age = 21;
switch (age) {
    case 11:
        console.log("pintu");
        break;
    case 21:
        console.log("jontu")
        break;

    default:
        console.log("others");
}

let myAge = 34;
if (myAge > 20 && myAge < 60) {
    console.log("you are a young person");
}

let whatDate = 'Sunday';
if (whatDate == 'Friday') {
    console.log('It is closed day.');
}else if (whatDate == 'Monday') {
    console.log('It is the first day of the week in USA.');
}else{
    console.log('It\'s our first working day of the week in the BD');
}


let tomAge = 32;

if (tomAge > 20) {
    console.log('You are a complete man');
    if (tomAge >60) {
        console.log('you are old man');
    }else{
        console.log('You are  young man!');
    }
} else{
    console.log('you are a child')
}

let fNum = 21;
let sNum = 13;
let tNum = 33;

if (fNum > sNum && fNum > tNum) {
    console.log('fNum is the big number');
    if (sNum >fNum && sNum > tNum) {
        console.log('sNum is the big number.')
    }else if (tNum > fNum && tNum > sNum) {
        console.log ('tNum is the Big Number');
    }else{
        console.log('you are small number')
    }
}else{
    console.log('you are not Big number.')
}