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
    
    
