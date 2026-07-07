function getAverage(arr) {
  let sum = 0;
  for (let i =0; i<arr.length; i++){
    sum += arr[i]
  }
  return sum/arr.length;
}

function getGrade(score) {
  let grade;
  if (score === 100) {
    grade = "A+";
  } else if (score<=99 && score>=90) {
    grade = "A";
  } else if (score<=89 && score>=80) {
    grade = "B";
  } else if (score<=79 && score>=70) {
    grade = "C";
  } else if (score<=69 && score>=60) {
    grade = "D";
  } else if (score<=59 && score>=0) {
    grade = "F";
  } else {
    return "Invalid score";
  }
  return grade;
}

function hasPassingGrade(score){
  const grade = getGrade(score);
  if (grade !== "F") {
    return true;
  } else {
    return false;
  }
  
}

function studentMsg(arr, score) {
  const avg = getAverage(arr);
  const grade = getGrade(score);
  const passed = hasPassingGrade(score);

  return `Class average: ${avg}. Your grade: ${grade}. ${passed ? "You passed the course." : "You failed the course."}`;
}
