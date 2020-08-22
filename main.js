//Задача №1
const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(firstRow, secondRow) {
  let lettersAInFirstRow = 0;
  let lettersAInSecondRow = 0;

  for (let char of firstRow) {
    if (char == "а") {
      lettersAInFirstRow++;
    }
  }

  for (let char of secondRow) {
    if (char == "а") {
      lettersAInSecondRow++;
    }
  }

  if (lettersAInFirstRow > lettersAInSecondRow) {
    return firstRow;
  } else {
    return secondRow;
  }
}
console.log(getRow(firstRow, secondRow));

//Задача №2
const number = "+71234567890";
function formattedPhone(phone) {
  return `${phone.charAt(0)}${phone.charAt(1)} (${phone.charAt(
    2
  )}${phone.charAt(3)}${phone.charAt(4)}) ${phone.charAt(5)}${phone.charAt(
    6
  )}${phone.charAt(7)}-${phone.charAt(8)}${phone.charAt(9)}-${phone.charAt(
    10
  )}${phone.charAt(11)}`;
}
console.log(formattedPhone(number));
