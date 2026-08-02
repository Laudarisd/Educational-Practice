
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int i = 0;  // Pointer to track the position of the next valid element

        // Loop through the entire array
        for (int j = 0; j < nums.size(); ++j) {
            // If the current element is NOT equal to val, keep it
            if (nums[j] != val) {
                nums[i] = nums[j];  // Copy the valid element to index i
                i++;                // Move i forward for the next valid element
            }
            // If nums[j] == val, we skip it (i stays in place)
        }

        // After loop, i is the count of elements not equal to val
        return i;
    }
};
