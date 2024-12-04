
// conditionals
// if, else,elseif

// const score = 100
// if (score < 50){
//     console.log("Fail");
// }
// else if (score < 60){console.log("Good");
// }
//     else if (score < 70) {console.log("Very Good");
//     }
// else{console.log("Excellent");
// }


  
// const grade = 40
// //grade for A
// if (grade >= 70 ) { 
//     console.log("Excellent");

// }
//  else if ( grade >= 60 && grade <= 69 ){
//     console.log("very good");
 
//  }
//  else if (grade >=50 && grade <=59) {
//     console.log("Good");
    
//  }
//  else  {
//     console.log("Fail");
    
//  }
 

//  loop and conditional statement

//  const grade = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// for (let g = 0;g <= 100; g++){
//     if (grade[g] >= 70 ) { 
//         console.log("Excellent");
    
//     }
//      else if ( grade[g] === 60 ){
//         console.log("very good");
     
//      }
//      else if (grade[g] ===50 ) {
//         console.log("good");
        
//      }
//      else if (grade[g] === 40 ){
//         console.log("poor");
        
//      }
//      else{console.log("fail");
//      }
// }

// Arrays of length. 
//   const numbers = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// //  console.log( numbers.length);
// // console.log(numbers.at (3));
// // console.log(numbers.pop());
// // console.log(numbers.push (110));
// console.log(numbers.shift);

// console.log(numbers);



//  or 

// const numbers = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let grades = numbers.length
// console.log(grades);
 

// Conditionals
// == checks only the value, if it's equal to the variable
// === checks the data type, if it's same as the variable
//Example

// const h = 14
// if (h == "14") {
//     console.log("First");
    
// }
// else {console.log("Second"); 
// }
// const y = 2
// y < 2 ? console.log("True") : console.log("False"); 
// let x = 4
// x <= 4? console.log(x+1) : console.log(x-1);

// const message = "successful" 
// message === successful" ? console.log("Green")
//  : console.log("Red");
 


// Switch
// const a = "green"

// switch (a) {
// case "red":
// console.log("red");
// break
// case "blue":
// console.log("blue");
// break
// default:
//     console.log("nothing");

// }

// for(let i = 10; i < 10; i++); {
//     if (i===3)  {break;}

// }
// switch
 const week = "January"
     
// Functions
// function daysOfTheWeek() {
      
//        switch (week) {
//        case "Monday":
//        console.log("Monday");
//        break
//        case "Tuesday":
//        console.log("Tuesday");
//        break
//        case "Wednesday":
//        console.log("Wednesday");
//        break
//        case "Thursday":
//        console.log("Thursday");
//        break
//        case "Friday":
//        console.log("Friday");
//        break
//        case "Saturday":
//        console.log("Saturday");
//        break
//        case "Sunday":
//        console.log("Sunday");
//        default:
//        console.log("Nothing");
    
// }
//      returnstudent = {
//     firstName: "Ada",
//     age: 16,
//     Last_names: "Obi",
//    subjects: ["English","Maths","Biology","Literature","Government","C.R.S", "History","Food & Nutrition"]
   
//     }

// }

//  console.log( daysOfTheWeek().student);
 

 


// // parameter and return statement
// function add () {
//     daysOfTheWeek()
// //  return (a + b);
// }
// add()
// //  let comput = add(2,3)
// //  console.log(comput);

// //Functions
// function school (params) {
//     console.log("first");
    
// }
// school()
// function addNumbers(params) {
//     const answer = 2+2
//     console.log(answer);
    
// }
// addNumbers()
// function addNumbers (a,b) {
//     const answer = a + b 
//     console.log(answer);
    
// }
// addNumbers(1,2)
// addNumbers(15,600)


// function greet (name,age) {
//     const msg = `Hello ${name}, your age is ${age}`
//     console.log(msg);
    



// function subjects(English,Maths,Physics,Chemistry,Biology) {
//     const ans = (English + Maths + Physics + Chemistry + Biology)/ 5
//     const msg =`Your average score is  ${ans}           `
// console.log(msg);



// }

// subjects(15,3,4,10,6)

// function value(pi,r) {
//     const ans= (pi*r**2)
//     console.log(ans);
    
// }
// value(3.142,2.5)

// const evi = (num = 0, num2 =) => {
// consnt ans = num + num2
// console.log(ans);
// }
// evi(7,9)
// const check = () => {
// const string = gggg
// const amount = 40
// if (string.length < 6) {
//     console.log("String characters must be a minimum of 6");
    
// }
// Assignment 1
const jamb = (Sub1,Sub2,Sub3,Sub4,Sub5) => {
         const subjects =(Sub1 + Sub2 + Sub3 +Sub4 + Sub5)>= 180 ?
         console.log("Congratulations!! You've been admitted"):
         console.log("Failed. Try again next year");
    
}
        jamb(40,50,70,40,60)
        jamb(30,40,20,25,20)
        jamb(50,50,50,40,60)

        // Assignment 2

        
        const password = "!tt$yydd"
        console.log(password.length);
    function passwordCheck ( ) {
        if (password.length >= 6 &&  password.includes("$")  && password.includes ("!") ){
             console.log(` password you enter  ${password} is  valid`);
             
        }
 else{
    console.log(`password you enter  ${password} is  invalid `);
    
 }
        }


 passwordCheck ( )
    
    // let password = (password.length >=6 && password.include($) && password.include ("!"))

    // if (password.
    // )

 