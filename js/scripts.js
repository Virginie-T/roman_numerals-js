function triangulator (num1, num2, num3) {

    var nums = [num1, num2, num3];
    nums.sort(function(a, b){return b-a});

    var result = "";

     if (nums[0] <= nums[1] + nums[2]) {

        if ((nums[0] === nums[1]) && (nums[1] === nums[2])) {
        result = "equilateral";
        }

        if ((nums[1] === nums[2]) && (nums[0] != nums[1])) {
            result = "isoscele";
        }

        if ((nums[0] != nums[1]) && (nums[0] != nums[2]) && (nums[1] != nums[2])) {
            result = "scalene";
        }
    }

    else if (nums[0] > nums[1] + nums[2]) {
        result = "not a triangle";
    }

    return result;

}