
function getValue() {
    let marks1 = document.querySelector("#text1");
    let marks2 = document.querySelector("#text2");
    let marks3 = document.querySelector("#text3");
    let marks4 = document.querySelector("#text4");
    let marks5 = document.querySelector("#text5");
    let total = parseFloat(marks1.value) + parseFloat(marks2.value) + parseFloat(marks3.value)
        + parseFloat(marks4.value) + parseFloat(marks5.value);
    let totalMarks = document.querySelector(".totalmarks");
    totalMarks.value = total;


    let percentage = document.querySelector(".percentage");
    percentage.value = Math.round((total / 500) * 100);

    let gradeAchieved = document.querySelector(".grade");
    if (percentage.value >= 80 && percentage.value <= 100) {
        gradeAchieved.value = "Grade A1";
    }
    else if (percentage.value >= 70 && percentage.value <= 79) {
        gradeAchieved.value = "Grade A";
    }
    else if (percentage.value >= 60 && percentage.value <= 69) {
        gradeAchieved.value = "Grade B";
    }
    else if (percentage.value >= 50 && percentage.value <= 59) {
        gradeAchieved.value = "Grade C";
    }
    else if (percentage.value >= 40 && percentage.value <= 49) {
        gradeAchieved.value = "Grade D";
    }
    else {
        gradeAchieved.value = "Grade F";
    }
    if (gradeAchieved.value === "Grade A" || gradeAchieved.value === "Grade B" || gradeAchieved.value === "Grade C"
        || gradeAchieved.value === "Grade D") {
        alert("You are Pass");
    }
    else {
        alert("You are Fail");
    }


    let showResult = document.querySelector("#showResult");
    showResult.innerHTML = `You got ${total} out of 500 and your percentage is ${percentage.value}%. 
<br> Your grade is ${gradeAchieved.value}.`
}


