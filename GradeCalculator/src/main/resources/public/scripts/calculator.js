button1.addEventListener('click', meanfunc);
button2.addEventListener('click', weightfunc);
button3.addEventListener('click', addTableA5);
button4.addEventListener('click', reset);

function weightfunc() {
    var weightA1var = document.getElementById('weightA1').value;
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var weightA2var = document.getElementById('weightA2').value;
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var weightA3var = document.getElementById('weightA3').value;
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var weightA4var = document.getElementById('weightA4').value;
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var weightA5var = document.getElementById('weightA5').value;
    var gradeTopA5var = document.getElementById('gradeTopA5').value;
    var gradeBotA5var = document.getElementById('gradeBotA5').value;
    var weightA6var = document.getElementById('weightA6').value;
    var gradeTopA6var = document.getElementById('gradeTopA6').value;
    var gradeBotA6var = document.getElementById('gradeBotA6').value;
    var weightA7var = document.getElementById('weightA7').value;
    var gradeTopA7var = document.getElementById('gradeTopA7').value;
    var gradeBotA7var = document.getElementById('gradeBotA7').value;
    var weightA8var = document.getElementById('weightA8').value;
    var gradeTopA8var = document.getElementById('gradeTopA8').value;
    var gradeBotA8var = document.getElementById('gradeBotA8').value;

    var temp;
    var grade;
    var grade1 = weightA1var * (gradeTopA1var / gradeBotA1var);
    var grade2 = weightA2var * (gradeTopA2var / gradeBotA2var);
    var grade3 = weightA3var * (gradeTopA3var / gradeBotA3var);
    var grade4 = weightA4var * (gradeTopA4var / gradeBotA4var);
    var grade5 = weightA5var * (gradeTopA5var / gradeBotA5var);
    var grade6 = weightA6var * (gradeTopA6var / gradeBotA6var);
    var grade7 = weightA7var * (gradeTopA7var / gradeBotA7var);
    var grade8 = weightA8var * (gradeTopA8var / gradeBotA8var);

    if (isNaN(grade1) || gradeBotA1var <= 0 || gradeTopA1var < 0 || weightA1var < 0) {
        grade1 = 0;
        weightA1var = 0;
        gradeTopA1var = 0;
        gradeBotA1var = 0;
    }
    if (isNaN(grade2) || gradeBotA2var <= 0 || gradeTopA2var < 0 || weightA2var < 0) {
        grade2 = 0;
        weightA2var = 0;
        gradeTopA2var = 0;
        gradeBotA2var = 0;
    }
    if (isNaN(grade3) || gradeBotA3var <= 0 || gradeTopA3var < 0 || weightA3var < 0) {
        grade3 = 0;
        weightA3var = 0;
        gradeTopA3var = 0;
        gradeBotA3var = 0;
    }
    if (isNaN(grade4) || gradeBotA4var <= 0 || gradeTopA4var < 0 || weightA4var < 0) {
        grade4 = 0;
        weightA4var = 0;
        gradeTopA4var = 0;
        gradeBotA4var = 0;
    }
    if (isNaN(grade5) || gradeBotA5var <= 0 || gradeTopA5var < 0 || weightA5var < 0) {
        grade5 = 0;
        weightA5var = 0;
        gradeTopA5var = 0;
        gradeBotA5var = 0;
    }
    if (isNaN(grade6) || gradeBotA6var <= 0 || gradeTopA6var < 0 || weightA6var < 0) {
        grade6 = 0;
        weightA6var = 0;
        gradeTopA6var = 0;
        gradeBotA6var = 0;
    }
    if (isNaN(grade7) || gradeBotA7var <= 0 || gradeTopA7var < 0 || weightA7var < 0) {
        grade7 = 0;
        weightA7var = 0;
        gradeTopA7var = 0;
        gradeBotA7var = 0;
    }
    if (isNaN(grade8) || gradeBotA8var <= 0 || gradeTopA8var < 0 || weightA8var < 0) {
        grade8 = 0;
        weightA8var = 0;
        gradeTopA8var = 0;
        gradeBotA8var = 0;
    }

    temp = weightA1var * 1 + weightA2var * 1 + weightA3var * 1 + weightA4var * 1 + weightA5var * 1 + weightA6var * 1 + weightA7var * 1 + weightA8var * 1;
    grade = ((grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8) / temp);

    if (isNaN(grade)) {
        resultEnd.textContent = "Error";
    } else {
        resultEnd.textContent = (grade * 100).toFixed(2) + "%";
    }
    
}

function meanfunc() {
    var weightA1var = document.getElementById('weightA1').value;
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var weightA2var = document.getElementById('weightA2').value;
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var weightA3var = document.getElementById('weightA3').value;
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var weightA4var = document.getElementById('weightA4').value;
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var weightA5var = document.getElementById('weightA5').value;
    var gradeTopA5var = document.getElementById('gradeTopA5').value;
    var gradeBotA5var = document.getElementById('gradeBotA5').value;
    var weightA6var = document.getElementById('weightA6').value;
    var gradeTopA6var = document.getElementById('gradeTopA6').value;
    var gradeBotA6var = document.getElementById('gradeBotA6').value;
    var weightA7var = document.getElementById('weightA7').value;
    var gradeTopA7var = document.getElementById('gradeTopA7').value;
    var gradeBotA7var = document.getElementById('gradeBotA7').value;
    var weightA8var = document.getElementById('weightA8').value;
    var gradeTopA8var = document.getElementById('gradeTopA8').value;
    var gradeBotA8var = document.getElementById('gradeBotA8').value;
    var activites = 8;
    var grade1 = gradeTopA1var / gradeBotA1var;
    var grade2 = gradeTopA2var / gradeBotA2var;
    var grade3 = gradeTopA3var / gradeBotA3var;
    var grade4 = gradeTopA4var / gradeBotA4var;
    var grade5 = gradeTopA5var / gradeBotA5var;
    var grade6 = gradeTopA6var / gradeBotA6var;
    var grade7 = gradeTopA7var / gradeBotA7var;
    var grade8 = gradeTopA8var / gradeBotA8var;
    var moreRows = document.getElementById("tableA5");
    


    if (isNaN(grade1) || gradeBotA1var <= 0 || gradeTopA1var < 0 || weightA1var < 0) {
        grade1 = 0;
        gradeTopA1var = 0;
        gradeBotA1var = 0;
        activites--;
    }
    
    if (isNaN(grade2) || gradeBotA2var <= 0 || gradeTopA2var < 0 || weightA2var < 0) {
        grade2 = 0;
        gradeTopA2var = 0;
        gradeBotA2var = 0;
        activites--;
    }
    if (isNaN(grade3) || gradeBotA3var <= 0 || gradeTopA3var < 0 || weightA3var < 0) {
        grade3 = 0;
        gradeTopA3var = 0;
        gradeBotA3var = 0;
        activites--;
    }
    if (isNaN(grade4) || gradeBotA4var <= 0 || gradeTopA4var < 0 || weightA4var < 0) {
        grade4 = 0;
        gradeTopA4var = 0;
        gradeBotA4var = 0;
        activites--;
    }
    if (isNaN(grade5) || gradeBotA5var <= 0 || gradeTopA5var < 0 || weightA5var < 0) {
        grade5 = 0;
        gradeTopA5var = 0;
        gradeBotA5var = 0;
        activites--;
    }
    if (isNaN(grade6) || gradeBotA6var <= 0 || gradeTopA6var < 0 || weightA6var < 0) {
        grade6 = 0;
        gradeTopA6var = 0;
        gradeBotA6var = 0;
        activites--;
    }
    if (isNaN(grade7) || gradeBotA7var <= 0 || gradeTopA7var < 0 || weightA7var < 0) {
        grade7 = 0;
        gradeTopA7var = 0;
        gradeBotA7var = 0;
        activites--;
    }
    if (isNaN(grade8) || gradeBotA8var <= 0 || gradeTopA8var < 0 || weightA8var < 0) {
        grade8 = 0;
        gradeTopA8var = 0;
        gradeBotA8var = 0;
        activites--;
    }
    grade = (grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8) / activites;

    if (isNaN(grade)) {
        resultEnd.textContent = "Error";
    } else {
        resultEnd.textContent = (grade * 100).toFixed(2) + "%";
    }
}

function percentA1func() {
    var weightA1var = document.getElementById('weightA1').value;
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var temp = (100 * (gradeTopA1var / gradeBotA1var)).toFixed(2);
    percentA1.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA1var <= 0 || gradeTopA1var < 0 || weightA1var < 0) {
        if (gradeTopA1var == 0 && gradeBotA1var == 0) {
            percentA1.textContent = "";
        } else {
            percentA1.textContent = "Error";
        }
    } else {
        percentA1.textContent = temp + "%";
    }

}

function percentA2func() {
    var weightA2var = document.getElementById('weightA2').value;
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var temp = (100 * (gradeTopA2var / gradeBotA2var)).toFixed(2);
    percentA2.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA2var <= 0 || gradeTopA2var < 0 || weightA2var < 0) {
        if (gradeTopA2var == 0 && gradeBotA2var == 0) {
            percentA2.textContent = "";
        } else {
            percentA2.textContent = "Error";
        }
    } else {
        percentA2.textContent = temp + "%";
    }
}

function percentA3func() {
    var weightA3var = document.getElementById('weightA3').value;
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var temp = (100 * (gradeTopA3var / gradeBotA3var)).toFixed(2);
    percentA3.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA3var <= 0 || gradeTopA3var < 0 || weightA3var < 0) {
        if (gradeTopA3var == 0 && gradeBotA3var == 0) {
            percentA3.textContent = "";
        } else {
            percentA3.textContent = "Error";
        }
    } else {
        percentA3.textContent = temp + "%";
    }
}

function percentA4func() {
    var weightA4var = document.getElementById('weightA4').value;
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var temp = (100 * (gradeTopA4var / gradeBotA4var)).toFixed(2);
    percentA4.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA4var <= 0 || gradeTopA4var < 0 || weightA4var < 0) {
        if (gradeTopA4var == 0 && gradeBotA4var == 0) {
            percentA4.textContent = "";
        } else {
            percentA4.textContent = "Error";
        }
    } else {
        percentA4.textContent = temp + "%";
    }
}

function percentA5func() {
    var weightA5var = document.getElementById('weightA5').value;
    var gradeTopA5var = document.getElementById('gradeTopA5').value;
    var gradeBotA5var = document.getElementById('gradeBotA5').value;
    var temp = (100 * (gradeTopA5var / gradeBotA5var)).toFixed(2);
    percentA5.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA5var <= 0 || gradeTopA5var < 0 || weightA5var < 0) {
        if (gradeTopA5var == 0 && gradeBotA5var == 0) {
            percentA5.textContent = "";
        } else {
            percentA5.textContent = "Error";
        }
    } else {
        percentA5.textContent = temp + "%";
    }
}

function percentA6func() {
    var weightA6var = document.getElementById('weightA6').value;
    var gradeTopA6var = document.getElementById('gradeTopA6').value;
    var gradeBotA6var = document.getElementById('gradeBotA6').value;
    var temp = (100 * (gradeTopA6var / gradeBotA6var)).toFixed(2);
    percentA6.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA6var <= 0 || gradeTopA6var < 0 || weightA6var < 0) {
        if (gradeTopA6var == 0 && gradeBotA6var == 0) {
            percentA6.textContent = "";
        } else {
            percentA6.textContent = "Error";
        }
    } else {
        percentA6.textContent = temp + "%";
    }
}

function percentA7func() {
    var weightA7var = document.getElementById('weightA7').value;
    var gradeTopA7var = document.getElementById('gradeTopA7').value;
    var gradeBotA7var = document.getElementById('gradeBotA7').value;
    var temp = (100 * (gradeTopA7var / gradeBotA7var)).toFixed(2);
    percentA7.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA7var <= 0 || gradeTopA7var < 0 || weightA7var < 0) {
        if (gradeTopA7var == 0 && gradeBotA7var == 0) {
            percentA7.textContent = "";
        } else {
            percentA7.textContent = "Error";
        }
    } else {
        percentA7.textContent = temp + "%";
    }
}

function percentA8func() {
    var weightA8var = document.getElementById('weightA8').value;
    var gradeTopA8var = document.getElementById('gradeTopA8').value;
    var gradeBotA8var = document.getElementById('gradeBotA8').value;
    var temp = (100 * (gradeTopA8var / gradeBotA8var)).toFixed(2);
    percentA8.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA8var <= 0 || gradeTopA8var < 0 || weightA8var < 0) {
        if (gradeTopA8var == 0 && gradeBotA8var == 0) {
            percentA8.textContent = "";
        } else {
            percentA8.textContent = "Error";
        }
    } else {
        percentA8.textContent = temp + "%";
    }
}


function addTableA5() {
    document.getElementById("b1t").setAttribute("style", "height:1400px");
    document.getElementById("b2t").setAttribute("style", "height:1320px");
    document.getElementById("b3t").setAttribute("style", "height:1200px");
    tableA5.style.display = "table";
}

function reset() {
    document.getElementById('weightA1').value = "";
    document.getElementById('gradeTopA1').value = "";
    document.getElementById('gradeBotA1').value = "";
    document.getElementById('weightA2').value = "";
    document.getElementById('gradeTopA2').value = "";
    document.getElementById('gradeBotA2').value = "";
    document.getElementById('weightA3').value = "";
    document.getElementById('gradeTopA3').value = "";
    document.getElementById('gradeBotA3').value = "";
    document.getElementById('weightA4').value = "";
    document.getElementById('gradeTopA4').value = "";
    document.getElementById('gradeBotA4').value = "";
    document.getElementById('weightA5').value = "";
    document.getElementById('gradeTopA5').value = "";
    document.getElementById('gradeBotA5').value = "";
    document.getElementById('weightA6').value = "";
    document.getElementById('gradeTopA6').value = "";
    document.getElementById('gradeBotA6').value = "";
    document.getElementById('weightA7').value = "";
    document.getElementById('gradeTopA7').value = "";
    document.getElementById('gradeBotA7').value = "";
    document.getElementById('weightA8').value = "";
    document.getElementById('gradeTopA8').value = "";
    document.getElementById('gradeBotA8').value = "";
    percentA1.textContent = "";
    percentA2.textContent = "";
    percentA3.textContent = "";
    percentA4.textContent = "";
    percentA5.textContent = "";
    percentA6.textContent = "";
    percentA7.textContent = "";
    percentA8.textContent = "";
    document.getElementById("b1t").setAttribute("style", "height:900px");
    document.getElementById("b2t").setAttribute("style", "height:820px");
    document.getElementById("b3t").setAttribute("style", "height:700px");
    tableA5.style.display = "none";
    resultEnd.textContent = "";
}