function find3SumClosest(nums, target) {
    const newArr = nums.sort((a,b) => a-b);
    let closestSum;

    for(let i=0; i<newArr.length-2; i++) {
        let start = i+1;
        let end = newArr.length - 1;
        
        if(closestSum === undefined) {
            closestSum = newArr[i] + newArr[start] + newArr[end];
        }

        while(start < end) {
            const currentSum = newArr[i] + newArr[start] + newArr[end];
            if(Math.abs(closestSum - target) > Math.abs(currentSum - target)) {
                closestSum = currentSum;
            } else if (currentSum - target < 0){
                while(start < end && newArr[start] === newArr[start+1]) {
                    start += 1;
                }
                start += 1;
            } else if(currentSum - target > 0) {
                while(start < end && newArr[end] === newArr[end-1]) {
                    end -= 1;
                }
                end -= 1;
            } else if(currentSum - target === 0) {
                closestSum = currentSum;
                break;
            }
        }

        if(closestSum === 0) {
            break;
        }
    }
    return closestSum;
}

arr = [0,1,2];
target = 3
const sum = find3SumClosest(arr, target);
console.log(sum);