var twoSum = function(nums, target) {
	// two loops but the second loop starts at on ahead of the first one 
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
		// then we check if i + j is euqal to the target so i and the next element after
            if(nums[i] + nums[j] == target)
            {
		// if this turn true i give back the indiezes of those values that are equal to the target
                return [i ,j]
            }
        }
    }
    
