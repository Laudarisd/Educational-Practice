// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // If the array has 2 or fewer elements, no need to process
        if (nums.size() <= 2) return nums.size();

        // 'i' is the index where the next valid element will be placed
        int i = 2;

        // Start from the 3rd element and process till the end
        for (int j = 2; j < nums.size(); j++) {
            // Check if current number is not the same as the number at i-2 index
            if (nums[j] != nums[i - 2]) {
                // If not, it means we can keep this number
                nums[i] = nums[j];
                i++;  // Move the insertion point forward
            }
        }

        // Return the length of the array with allowed duplicates
        return i;
    }
};
