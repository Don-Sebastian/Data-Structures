var findNumbers = function (nums) {
    let ans = 0;
    for (let index = 0; index < nums.length; index++) {
        let number = nums[index]
        let count = 0;
        while (number > 0) {
            number = number / 10;
            count++;
        }
        if (count % 2 == 0) ans++;
    }
    return ans;
};
