//arguments:
//students score, total possible score
//15/20 -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (studentScore, totalPossScore) {
    let grade = (studentScore / totalPossScore) * 100
    let letter = 'A'
    if (grade >= 90) {
        letter = 'A'
    } else if (grade >= 80 && grade <= 89) {
        letter = 'B'
    } else if (grade >= 70 && grade <= 79) {
        letter = 'C'
    } else if (grade >= 60 && grade <= 69) {
        letter = 'D'
    } else {
        letter = 'F'
    }
    return `${studentScore}/${totalPossScore} -> You got a ${letter} (${grade}%)!`
}

console.log(gradeCalc(55, 60))
