module.exports = function repeater(str, options) {
    let result="";
    
    if(options.repeatTimes && options.additionRepeatTimes && typeof(options.repeatTimes) === "number" && typeof(options.additionRepeatTimes)==="number") 
       {
        for(var i = 0; i < options.repeatTimes; i++){
          let subresult = str;
            for(var j = 0; j < options.additionRepeatTimes; j++){
                subresult = subresult + options.addition;
                if(j < options.additionRepeatTimes-1){
                    subresult = subresult + options.additionSeparator;
                }
            }
            result = result + subresult;
            if ( i < options.repeatTimes-1){
                result = result + options.separator;
            }
        }
      return result;
    } else  {
    return str;
    }
};
  
