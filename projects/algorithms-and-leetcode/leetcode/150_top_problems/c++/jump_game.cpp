// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

#include <iostream>
#include <vector>
using namespace std;



class Solution {
    public:
    bool canJump(vector<int>& nums) {
        int max_reachable = 0;
        for (int i =0; i < nums.size(); ++i) {
            if (i > max_reachable) {
                return false; // If current index is beyond the max reachable index, return false
            }
            max_reachable = max(max_reachable, i + nums[i]); // Update the max reachable index
        }

    };
}