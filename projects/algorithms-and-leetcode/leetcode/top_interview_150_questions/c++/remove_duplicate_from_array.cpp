
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Edge case: if the array is empty, return 0
        if (nums.empty()) return 0;

        // Initialize a pointer to track the position of the last unique element
        int uniqueIndex = 0;

        // Start from the second element and iterate through the array
        for (int i = 1; i < nums.size(); i++) {
            // If the current element is different from the last unique one
            if (nums[i] != nums[uniqueIndex]) {
                uniqueIndex++;             // Move the unique pointer forward
                nums[uniqueIndex] = nums[i]; // Overwrite with the new unique value
            }
        }

        // Return the number of unique elements
        return uniqueIndex + 1;
    }
};
