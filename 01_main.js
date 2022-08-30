// alert('Hello from Java Script!!')
// document.getElementById("message").innerHTML= "This is from JavaScript"
// function greet() {
//     document.getElementById("message").innerHTML = "Happy Ganesh Chaturthi"
    
// }
//---variables---
//  a = 10;
//  b = 20;

//  c = a + b;
// document.getElementById("message").innerHTML = "Addition of "+ a + "and" + b + "is" + c;

//----var and Let---


// x = 10;
// let y = 10;
// console.log("value of x = "+x);
// console.log("value of y ="+y);
// {
// x = 20;
// let y = 20;

// console.log("value of x = "+x);
// console.log("value of y = "+y);
// }
// console.log("value of x =" + x);
// console.log("value of y = "+y);


// function greetuser() {
//     let username = document.getElementById("username").value;
//     document.getElementById("message").innerHTML = "Hello" + username;
// }
// function Addition() {
//     let number1 = parseInt(document.getElementById("number1").value);
//     let number2 = parseInt(document.getElementById("number2").value);
//     let sum = number1 + number2;
//   document.getElementById("message").innerHTML ="Addition is " +sum;
// }
// function Subtraction() {
//     let number1 = parseInt(document.getElementById("number1").value);
//     let number2 = parseInt(document.getElementById("number2").value);
//     let sub = number1 - number2;
//   document.getElementById("message").innerHTML ="Subtraction is " +sub;
// }
// function Multiplication() {
//     let number1 = parseInt(document.getElementById("number1").value);
//     let number2 = parseInt(document.getElementById("number2").value);
//     let mul = number1 * number2;
//   document.getElementById("message").innerHTML ="Multiplication is " +mul;
// }
// function Division() {
//     let number1 = parseInt(document.getElementById("number1").value);
//     let number2 = parseInt(document.getElementById("number2").value);
//     let div = number1 / number2;
//   document.getElementById("message").innerHTML ="Division is " +div;
// }

// const cars = ['Getz Prime','Honda','i20','Breeza'];
// document.getElementById('message').innerHTML = cars;


// var date = new Date();
// document.getElementById("fulldate").innerHTML = date;
// switch (date.getDay()) {
//     case 1:
//         document.getElementById("day").innerHTML = 'Monday';
        
//         break;
//         case 2:
//         document.getElementById("day").innerHTML = 'Tuesday';
        
//         break;
//         case 3:
//         document.getElementById("day").innerHTML = 'Wednesday';
//         break;
//         case 4:
//         document.getElementById("day").innerHTML = 'Thursday';
        
//         break;
//         case 5:
//         document.getElementById("day").innerHTML = 'Friday';
        
//         break;
//         case 6:
//         document.getElementById("day").innerHTML = 'Saturday';
        
//         break;
//         case 7:
//         document.getElementById("day").innerHTML = 'Sunday';
        
//         break;

//     default:
//         break;
// }
//var date = new Date();
// document.getElementById('month').innerHTML = date;
// switch (date.getMonth() +1) {
//     case 1:
//         document.getElementById("month").innerHTML = 'January';
        
//         break;
//         case 2:
//         document.getElementById("month").innerHTML = 'Feb';
        
//         break;
//         case 3:
//         document.getElementById("month").innerHTML = 'mar';
        
//         break;
//         case 4:
//         document.getElementById("month").innerHTML = 'april';
        
//         break;
//     case 5:
//         document.getElementById("month").innerHTML = 'may';
        
//         break;
//         case 6:
//         document.getElementById("month").innerHTML = 'jun';
        
//         break;
//         case 7:
//         document.getElementById("month").innerHTML = 'july';
        
//         break;
//         case 8:
//         document.getElementById("month").innerHTML = 'aug';
        
//         break;

//     default:
//         break;
// }
// document.getElementById('fulldate').innerHTML =date;
// document.getElementById("day").innerHTML =date.getDate();
// document.getElementById("month").innerHTML =date.getMonth() +1;
// document.getElementById("year").innerHTML =date.getFullYear();
// document.getElementById("hours").innerHTML =date.getHours();
// document.getElementById("minutes").innerHTML =date.getMinutes();
// document.getElementById("seconds").innerHTML =date.getSeconds();


//---for loop--
// const cars = ['Getz Prime','Honda','i20','Breeza'];
// let text = "";
// let length = cars.length
// for(let i=0;i<length;i++){
//     text = text + "Car is" + cars[i] + "<br>";
// }
// document.getElementById('message').innerHTML = text;


//---for in loop--
// const cars = ['Getz Prime','Honda','i20','Breeza'];
// let text = "";
// for(let i in cars){
//     text = text + "car is" + cars[i] + "<br>";
// }
// document.getElementById("message").innerHTML = text;

//--for of loop---

// const cars = ['Getz Prime','Honda','i20','Breeza'];
// let text = "";
// for(let car of cars){
//     text = text + "car is " + car +"<br>";
// }
// document.getElementById("message").innerHTML = text;

// function validate(){
//     alert("validate() is called");
//     if (document.userdetails.username.value == "") {
//         alert("Please provide your username");
//         document.userdetails.username.focus();
//         return false;
//     }
//     if (document.userdetails.email.value == "") {
//         alert("Please provide your email");
//         document.userdetails.email.focus();
//         return false;
//     }
//     if (document.userdetails.zipcode.value == "") {
//         alert("Please provide your zipcode");
//         document.userdetails.zipcode.focus();
//         return false;
//     }
//     if (document.userdetails.Country.value == -1) {
//         alert("Please provide your Country");
//         document.userdetails.Country.focus();
//         return false;
//     }
//     return false;
// }











