/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Sunday ="Sunday"

}

function isWeekend(day:Day): boolean{
  if (day === "Sunday") {
    return true
  } 
    return false;
  }


isWeekend(Day.Monday)
