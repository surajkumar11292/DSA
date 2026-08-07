/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 1;
    let i =0;
    let j=1;
    let n = nums.length

    while(j<n)
    {

        if(nums[i]==nums[j]){
            j++;
            continue;

        }
        else{
            nums[i+1]=nums[j];
            unique++;
            j++;
            i++;
        }

    }
    return unique;


};