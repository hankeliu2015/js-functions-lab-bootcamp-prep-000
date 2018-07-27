// write your code below!
function happyHolidays() {
  var message = 'Happy Holidays!';
  return message;
}

function happyHolidaysTo(name) {
  let message = `Happy Holidays, ${name}!`;
  return message; 
}

function happyHolidayTo(holiday, name) {
  var message = `Happy ${holiday}, ${name}!`;
  return message;
}

function holidayCountdown (holiday, days) {
  message = `it\'s $(days) days until ${holiday}!`;
  return message;
}