// The grading chart is 
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

function findGrade(marks) {
    //write your code here
    //don't forget to write return
    let grade = "";
    if (marks >= 80 ){
        grade = "A";
        return grade;
    }
    else if(marks <= 60){
        grade = "B";
        return grade;
    }
    else if(marks <= 50){
        grade = "C";
        return grade;
    }
    else if(marks <= 40){
        grade = "D";
        return grade;
    }
    else{
        grade = "F";
        return grade;
    }
}
let marks = 50;
const gradeMark = findGrade(marks);
console.log(gradeMark);
