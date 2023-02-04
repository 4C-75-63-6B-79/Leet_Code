console.log('3_Sum');

function find3Sums(arr) {
    arr.sort((a,b) => a-b);
    const result = [];

    let mid, last;

    for(let first = 0; first < arr.length - 2; first += 1) {

        if(arr[first] > 0) {
            break;
        }

        if(first !== 0 && arr[first] == arr[first-1]) {
            continue;
        }

        let sum = 0;
        mid = first + 1;
        last = arr.length - 1;

        while(mid < last) {

            sum = arr[first] + arr[mid] + arr[last];
            if(sum > 0) {
                last = last - 1;
            } else if(sum < 0) {
                mid = mid + 1;
            } else {
                result.push([arr[first] , arr[mid] , arr[last]]);
                while(mid < last && arr[mid] === arr[mid+1]) {
                    mid = mid + 1;
                }
    
                while(last > mid && arr[last] === arr[last-1]) {
                    last -= 1;
                }
                
                mid += 1;
                last -=1 ;
            }

        }
    }
    return result;
}


const result = find3Sums([-1,0,1,2,-1,-4]);
console.log(result);