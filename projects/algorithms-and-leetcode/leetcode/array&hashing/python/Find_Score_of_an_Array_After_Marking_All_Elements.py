class Solution:
    def findScore(self, nums: List[int]) -> int:
        n = len(nums)
        ord = list(range(n))
        
        ord.sort(key=lambda x: (nums[x], x))  # Sort indices by value and then by index
        
        m = [False] * n  # Array to mark processed elements
        score = 0
        
        for x in ord:
            if m[x]: continue  # Skip if already processed
            score += nums[x]  # Add value to score
            m[x] = True  # Mark current element as processed
            if x > 0: m[x - 1] = True  # Mark previous element as processed
            if x + 1 < n: m[x + 1] = True  # Mark next element as processed
        
        return score
