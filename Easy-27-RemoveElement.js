/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var numIndice = nums.indexOf(val);
    var k = 0;

    while (numIndice >= 0) {
        nums.splice(numIndice, 1);
        k++;
        numIndice = nums.indexOf(val);
    }

    k = nums.length;

    return k;
};
