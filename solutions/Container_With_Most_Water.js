function mostWater(heights) {
    let max = 0;
    let start = 0, end = heights.length-1;
    while(start < end) {
        let val = (end-start) * (heights[start] > heights[end] ? heights[end] : heights[start]);
        if(max < val) {
            max = val;
        }

        if(heights[start] < heights[end]) {
            start += 1;
        } else {
            end -= 1;
        }
    }
    return max;
}

console.log(mostWater([1,8,6,2,5,4,8,3,7]));