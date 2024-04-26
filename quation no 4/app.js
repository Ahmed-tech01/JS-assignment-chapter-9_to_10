var UserSubject = prompt("Enter the  subject name");
var UserMarks = +prompt("Enter the Marks You obtained");

var TotalNumber = 100;
var Marksobtained = UserMarks;
var percentage = (Marksobtained / TotalNumber) * 100;
if (UserMarks >= 80) {
  grade = "A";
} else {
  grade = "B";
}
if (UserMarks <= 80) {
  remarks = "You need to improve";
} else {
  remarks = "great  marks";
}
document.write("<h1> Marks Sheet</h1> <br>");
document.write("<h2> Total marks : " + TotalNumber + "</h2> <br>");
document.write("<h2> Marks obtained : " + Marksobtained + "</h2> <br>");
document.write("<h2> Percentage :" + percentage + "%</h2> <br>");
document.write("<h2> Grade :" + grade + "</h2> <br>");
document.write("<h2> Remarks  :" + remarks + "</h2> <br>");
