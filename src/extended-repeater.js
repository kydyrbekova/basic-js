module.exports = function repeater(str, options) {
    let separator = options.separator ? options.separator : '+';
    let addition_sep = options.additionSeparator ? options.additionSeparator : '|';
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let addition_repTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let addition;
    let result = []; 
    
    if (typeof(options.addition) == "undefined") {
        addition = '';
    } else {
        addition = options.addition  + '';
    }

    for(let i = 0; i < repeatTimes; i++){
        let sep_array = [];
        for(let j = 0; j < addition_repTimes; j++) {
            sep_array.push(addition);
        }
        result.push(str+sep_array.join(addition_sep))
    }
    return (result.join(separator));
};
