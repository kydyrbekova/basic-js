module.exports = function countCats(/* matrix */) {
  function countCats(backyard) {
    count = 0
    for (var i = 0; i < backyard.length; i++) {
        var innerArrayLength = backyard[i].length;
        for (var j = 0; j < innerArrayLength; j++) {
            if (backyard[i][j] == "^^") {
                count++
            }
        }
    }
    return count
}
  // remove line with error and write your code here
};
