class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = 0
        max_num = 0
        for i in range(len(nums)):
            #print(i)
            if nums[i] == 1:
                count += 1
            else:
                count = 0
            max_num = max(max_num, count)
        return max_num
