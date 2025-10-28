function daysOfAYear(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  } else {
    return 365;
  }
}

const input = prompt("Enter a year:");
const year = parseInt(input);

if (isNaN(year)) {
  alert("Please enter a valid year!");
} else {
  const days = daysOfAYear(year);
  alert(days); 
}