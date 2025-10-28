//your JS code here. If required.

function daysOfAYear(year) {

	const leapYear = 366;
	const nonLeapYear = 365;
	

	if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
		return leapYear;
	}else return nonLeapYear;
	
}


 const input = prompt("Enter a year:");

  const year = parseInt(input);

  if (isNaN(year)) {
    alert("❌ Please enter a valid year!");
  } else {
    const days = daysOfAYear(year);
    alert(`✅ The year ${year} has ${days} days.`);
  }