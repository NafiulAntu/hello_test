function mySqrt(x) {
    if (x < 2) return x;  // 0 -> 0, 1 -> 1

    let left = 1, right = Math.floor(x / 2), ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;

        if (sq === x) {
            return mid;
        } else if (sq < x) {
            ans = mid;  // store the possible answer
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

// Example tests:
console.log(mySqrt(4));  // Output: 2
console.log(mySqrt(8));  // Output: 2
console.log(mySqrt(25));
console.log(mySqrt(10)); 
