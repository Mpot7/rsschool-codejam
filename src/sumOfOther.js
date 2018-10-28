module.exports = function sumOfOther(arr) {
    const len = arr.length;
    const res = [];
    for (let i=0; i<len; i++) {
        res[i]=arr.reduce(function(sum, curr) {
            return sum+curr; 
        }, 0)- arr[i];
    }
    return res;
};