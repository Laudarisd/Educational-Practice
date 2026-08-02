// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array


class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0;  // Initialize count for candidate
        int candidate = 0;  // Initialize candidate (any value, reset when count is 0)
        
        for (int num : nums) {  // Iterate through each number in the array
            if (count == 0) {  // If count is 0, set current number as candidate
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;  // Increment if same as candidate, else decrement
        }
        
        return candidate;  // Return the majority element
    }
};