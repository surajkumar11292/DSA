/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let Max_diff = Infinity;
    let n = nums.length;
    let i=0;
    let sum = 0;
    let diff=0;
    
    nums = nums.sort((a,b)=>a-b);

    while((i<n-2)&&i>=0)
    {
        let left=i+1;
        let right= n-1;
        while ((left<right)&&(left<=n-2))
        {

            correct_sum=nums[i]+nums[left]+nums[right];
            if(correct_sum==target)
            {
                return target;
            }
            else if (correct_sum>target)
            {
                
                diff = Math.abs(correct_sum-target);
                if(diff<Max_diff)
                {
                    Max_diff = diff;
                    sum = nums[i]+nums[left]+nums[right];
                }
                right--;
            }
            else if (correct_sum<target)
            {
                
                diff = Math.abs(correct_sum - target);
                if(diff<Max_diff)
                {
                    Max_diff = diff;
                    sum = nums[i]+nums[left]+nums[right];
                }
                left++;
            }
        }
        i++;
        
    }
    return sum;


};