var subjectName1 = prompt("Enter First Subject");
var subjectName2 = prompt("Enter Second Subject");
var subjectName3 = prompt("Enter Third Subject");

var enterMarks = "Enter Your Marks";
var subject1 = +prompt(enterMarks);
var subject2 = +prompt(enterMarks);
var subject3 = +prompt(enterMarks);

var subjectNum1 = subject1;
var subjectNum2 = subject3;
var subjectNum3 = subject3;

var totalSubjectMarks = 100;
var overAllMarks = 300;

var resultSubject1 = (subject1 / totalSubjectMarks) * 100;
var resultSubject2 = (subject2 / totalSubjectMarks) * 100;
var resultSubject3 = (subject3 / totalSubjectMarks) * 100;

var obtainedMarks = subjectName1 + subjectName2 + subjectName3;
var overAllResuls = (subject1 + subject2 + subject3) ;

document.write(
  "<h1>Subjects  Total Marks  Obtained Marks    Result</h1><br>" +
    "<p>" +
    subjectName1 +
    " / Total Marks " +
    totalSubjectMarks +
    " / obtains marks " +
    subject1 +
    " / percentage  " +
    resultSubject1 +
    "% </p> <br>"
);
document.write(
    "<p>" +
    subjectName2 +
    " / Total Marks " +
    totalSubjectMarks +
    " / obtains marks " +
    subject2 +
    " / percentage  " +
    resultSubject2 +
    "% </p> <br>"
);
document.write(
    "<p>" +
    subjectName3 +
    " / Total Marks " +
    totalSubjectMarks +
    " / obtains marks " +
    subject3 +
    " / percentage  " +
    resultSubject3 +
    "% </p> <br>"
);
document.write(
  "<p>" +
    overAllMarks +
    " /  " +
    obtainedMarks +
    " /  " +
    overAllResuls +
    " </p> <br>"
);
