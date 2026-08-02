class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        n = len(nums)
        res = abs(nums[0] - nums[n -1])
        for i in range(n - 1):
            res = max(res, abs(nums[i] - nums[i + 1]))
        return res

        