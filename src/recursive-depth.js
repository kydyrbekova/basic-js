module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        for(var i=0; i < arr.length; i++){
            let count = 1;
            if(Array.isArray(arr[i])){
                count = count + this.calculateDepth(arr[i]);
            }
            depth = Math.max(depth, count);
        }
        return depth;
    }
};
