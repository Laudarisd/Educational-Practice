from collections import defaultdict
from typing import List

class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        d = defaultdict(list)
        ans = -1
        
        # Traverse all numbers in the list
        for v in nums:
            # Calculate the sum of digits of the current number v
            digit_sum = sum(int(digit) for digit in str(v))
            
            # If we have already encountered numbers with the same sum of digits,
            # we can calculate their sum to potentially update the answer.
            if len(d[digit_sum]) > 0:
                ans = max(ans, d[digit_sum][0] + v)
            
            # Always keep the largest numbers in the list for each sum of digits
            d[digit_sum].append(v)
            d[digit_sum].sort(reverse=True)  # Sort in descending order
            
            # Keep only the top two values with the same sum of digits
            if len(d[digit_sum]) > 2:
                d[digit_sum].pop()  # Remove the smallest of the top two
        
        return ans

# Test the solution
if __name__ == '__main__':
    run = Solution()
    test1 = run.maximumSum([18, 43, 36, 13, 7])
    print(test1)
