//Ques1


function quicksort(nums, low, high) {
    if (low < high) {
        // pi is partitioning index, nums[pi] is now at right place
        let pi = partition(nums, low, high);

        // Separately sort elements before and after partition
        quicksort(nums, low, pi - 1);
        quicksort(nums, pi + 1, high);
    }
}

function partition(nums, low, high) {
    let pivot = nums[high];
    let i = low - 1;  // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (nums[j] <= pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];  // Swap
        }
    }

    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;
}

function sortArray(nums) {
    quicksort(nums, 0, nums.length - 1);
    return nums;
}

// Example 1
let nums1 = [5, 2, 3, 1];
console.log(sortArray(nums1));  // Output: [1, 2, 3, 5]

// Example 2
let nums2 = [5, 1, 1, 2, 0, 0];
console.log(sortArray(nums2));  // Output: [0, 0, 1, 1, 2, 5]




//Ques2

function merge(array1, m, array2, n) {
    // Initialize pointers for array1, array2, and the end of the merged array
    let index1 = m - 1;
    let index2 = n - 1;
    let mergeIndex = m + n - 1;

    // Merge array2 into array1 from the end
    while (index1 >= 0 && index2 >= 0) {
        if (array1[index1] > array2[index2]) {
            array1[mergeIndex] = array1[index1];
            index1--;
        } else {
            array1[mergeIndex] = array2[index2];
            index2--;
        }
        mergeIndex--;
    }

    // Copy remaining elements of array2 into array1, if any
    while (index2 >= 0) {
        array1[mergeIndex] = array2[index2];
        index2--;
        mergeIndex--;
    }
}

// Example 1
let array1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let array2 = [2, 5, 6];
let n = 3;
merge(array1, m, array2, n);
console.log(array1);  // Output: [1, 2, 2, 3, 5, 6]

// Example 2
array1 = [1];
m = 1;
array2 = [];
n = 0;
merge(array1, m, array2, n);
console.log(array1);  // Output: [1]

// Example 3
array1 = [0];
m = 0;
array2 = [1];
n = 1;
merge(array1, m, array2, n);
console.log(array1);  // Output: [1]
