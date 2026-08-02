// Problem: https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/description/

#include <vector>
#include <unordered_set>

class Solution {
public:
    int maxNonOverlapping(std::vector<int>& nums, int target) {
        int cumulative_sum = 0;  // Variable to track cumulative sum of elements
        std::unordered_set<int> sum_set = {0};  // Set to track the sums where subarrays can start
        int count = 0;  // Variable to count the number of non-overlapping subarrays

        for (int num : nums) {
            cumulative_sum += num;  // Add the current element to the cumulative sum

            // Check if (cumulative_sum - target) is in the set
            if (sum_set.find(cumulative_sum - target) != sum_set.end()) {
                // We found a non-overlapping subarray with sum equal to the target
                count++;
                // Reset the cumulative sum and start tracking a new subarray
                sum_set.clear();
                sum_set.insert(0);  // Insert 0 to start fresh for a new subarray
                cumulative_sum = 0;  // Reset cumulative sum for the new subarray
            } else {
                // If no subarray found, add the current cumulative sum to the set
                sum_set.insert(cumulative_sum);
            }
        }

        return count;  // Return the count of non-overlapping subarrays
    }
};
