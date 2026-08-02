// You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:
#include <iostream>
#include <vector>
using namespace std;




class Solution {
    public:
    int jump(vector<int>& nums) {
        int jumps = 0, current_end = 0, farthest = 0;
        for (int i = 0; i < nums.size() - 1; ++i) {
            farthest = max(farthest, i + nums[i]); // Update the farthest reachable index
            if (i == current_end) { // If we reach the end of the current jump
                jumps++; // Increment the jump count
                current_end = farthest; // Update the end for the next jump
            }
        }
        return jumps;

    }
};