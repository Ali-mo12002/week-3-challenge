// variables
var generateBtn = document.querySelector("#generate");  
var char = ""; // string to hold all password preferences like if user selects uppercase, all upper case characters will go in there
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // string with all upper case letters
var lowercase = "abcdefghijklmnopqrstuvwxyz"; // string with all lower case letters
var number = "1234567890"; // string with numbers 0-9
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // string with all special characters
var LCselected = false; // boolean for if user selects lowercase
var UCselected = false; // boolean for if user selects uppercase
var Numselected = false; // boolean for i user selects numbers
var SPselected = false; // boolean for if user selects special characters
var lengthpass = undefined; // integer for how long the user wants the pass word to be
var genpassword = ""; // the final password will be stored here to be shown to user.
// Write password to the #password input
function writePassword() { // function to write password into html
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // listens for user to click and calls on function

function lengthvalid(){ // function to check if length entered is valid
  lengthpass = window.prompt("how long would you like your password to be. please enter a number between 8 and 128.") // asks user to enter desired length
  if (isNaN(lengthpass)) { // if user input is not a number then it alerts them and loops until they get it right
    alert("Must input numbers");
    lengthvalid(); // calls on function again acting as a loop.
  }
 

  if (lengthpass < 8) { // if user input is not 8 characters or more it alerts them and loops until they get it right 
    alert("Password must be more than 8 characters")
    lengthvalid(); // calls on function again acting as a loop.
    
    }
    
  if (lengthpass > 128) { // if user input is greater than 128 characters it alerts them and loops until they get it right
    alert("Password must be 128 characters or less")
    lengthvalid(); // calls on function again acting as a loop.
  }
  
  
  }

  function UCyesno(){  // function for whether or not the user want upper case letter in password.
    var UC = window.prompt("Would you like upper case characters in your password. please enter Y for yes or N for no") // asks user to input
    UC = UC.toUpperCase(); // makes input uppercase
    if (UC != "Y" && UC != "N") { // if user doesnt input y or n it alerts and loops until they get it right
      alert("You must input Y for yes or N for no.");
      UCyesno(); // calls on function again acting as a loop.
    }
     
    if (UC === "Y"){ // if user enters y then it will enter statement
    console.log("UC = Y"); // logs that user chose uppercase in console
    char += uppercase; // adds all uppercase characters to char variable
    console.log(char);  // logs char variable 
    UCselected = true; // makes selected true as user entered yes
     
    }
    if (UC === "N"){ // if user enters n then it will enter statement

    console.log("UC = N"); // logs that user chose no
    UCselected = false; // keeps selected as false 
    }
  }
  function LCyesno(){ // function for whether or no the user want lower case letters in password
    var LC = window.prompt("Would you like lower case characters in your password. please enter Y for yes or N for no") // asks for user input 
    LC = LC.toUpperCase(); // makes input uppercase
    if (LC != "Y" && LC != "N") { // if user doesnt input y or n it alerts and loops until they get it right
      alert("You must input Y for yes or N for no."); 
      LCyesno(); // // calls on function again acting as a loop.
    }
    if (LC === "Y") { // if user selects y then it will enter statement
    console.log("LC = Y"); // logs that user chose to add lowercase characters to password
    char += lowercase; // adds all lowercase letters to char variable
    console.log(char); // logs char variable 
    LCselected = true; // makes selected true as user entered yes
    }
    if (LC === "N"){ // if user enters n then it will enter statement

      console.log("LC = N"); // logs that user chose no
      LCselected = false; // keeps selected as false
      }
  }

  function Numyesno(){ // function for whether or not user wants numbers in password
    var Num = window.prompt("would you like numbers in your password. please enter Y for yes or N for no.")// asks for user input
    Num =   Num.toUpperCase(); // makes input uppercase
    if (Num != "Y" && Num != "N") { // if input is not y or n then it will alert and loop until they get it right
      alert("You must input Y for yes or N for no.");
      Numyesno(); // calls on function again acting as a loop.
    }
    if (Num === "Y") { // if user enters y then it will enter the statement
    console.log("Num = Y"); // logs that user chose yes
    char += number; // adds all numbers to char variable
    console.log(char); // logs char variable in console
    Numselected = true; // makes selected true 
    }
    if (Num === "N"){ // if input is n then it will enter statement

      console.log("Num = N"); // logs that user chose no
      Numselected = false; // keeps selected as false
      }
  }
  function SPyesno(){ // function for whether or not user wants special characters in password
    var SP = window.prompt("would you like special characters in your password. please enter Y for yes or N for no.") // asks for user input
    SP =   SP.toUpperCase(); // makes input uppercase
    if (SP != "Y" && SP != "N") { // if user input is not y or n then it will alert and loop until they get it right
      alert("You must input Y for yes or N for no.");
      SPyesno();// calls on function again acting as a loop.
    }
    if (SP === "Y") { // if user choses y then it will enter statement
    console.log("SP = Y"); // logs that user wants special characters in password
    char += special; // adds all special characters to char variable 
    console.log(char); //logs char variable to console
    SPselected = true; // makes selected true 
    }
    if (SP === "N"){ // if user selects no then it will enter statement 

      console.log("SP = N"); // logs that user chose no in console
      SPselected = false; // keeps selected as false
      }
  }
  function generatePassword(){ // function to generate the password
genpassword = " "; // ensures that password box is clear so if user generates password again previous ones will be removed
char = ""; // ensures that char variable is empty everytime so if user changes preference it wont have two of same character in it
lengthvalid(); // calls on length function
console.log("Numlength = " + lengthpass); // logs length in console
UCyesno(); // calls on uppercase function
LCyesno(); // calls on lowercase function
Numyesno(); // calls on numbers function
SPyesno(); // calls on spectial characters function
 
if (UCselected == false && LCselected == false && Numselected == false && SPselected == false) { // if user doesnt select atleast one of the four password preferences then it will alert 
  alert("please try again, this time you need to select either a number, uppercase character, lowercase character or special character.")
  generatePassword(); // makes user start again
}


for (i = 0; i < lengthpass; i++){ // loops while i is less than length user wants
  genpassword += char.charAt(Math.floor(Math.random() * char.length));  // chooses random character from char string which holds all selected characters and loops until it reaches desired length
}
 console.log(genpassword); // logs generated password

 return genpassword  // returns password

}
