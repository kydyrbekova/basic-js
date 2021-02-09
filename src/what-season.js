module.exports = function getSeason(date) {
  if(date instanceof Date && !isNaN(date)){
	let month = date.getMonth();
	if(month ===11 || month <=1){return "winter";}
	else if(month<=4) {return "spring";}
	else if(month<=7) {return "summer";}
	else if(month <= 10) {return "autumn";}
	else {throw new Error();}

  } else if(date === undefined){ 
	return 'Unable to determine the time of year!';
  } else {throw new Error();}
};
