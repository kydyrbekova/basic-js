const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(sampleActivity == "" || typeof sampleActivity !== 'string' || parseFloat(sampleActivity) <= 0) {
    return false;
  }
  
  let k = 0.693/HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
  if(result>0) {return result;}
  else {return false;}
  
};
