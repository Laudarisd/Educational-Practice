# You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

# Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:



class Solution:
    def jump(self, nums: list[int]) -> int:
        """This is a greedy programing problem>"""
        jumps = 0
        current_end = 0
        farthest = 0

        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_end:
                jumps += 1
                current_end = farthest

        return jumps
    


if __name__ == "__main__":
    nums = [2, 3, 1, 1, 4]
    solution = Solution()
    print(solution.jump(nums))