var UserInput = prompt("Enter you Gender");
var MaleInput = "male";
var FemaleInput = "female";

if (UserInput === MaleInput) {
  document.write("Good Morning Sir");
} 
else if(UserInput === FemaleInput) {
  document.write("Good Morning Ma’am");
}
else{
  document.write("wrong");
}
