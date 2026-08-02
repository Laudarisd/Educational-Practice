"""
Problem: https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/description/?envType=daily-question&envId=2024-11-15
"""

from typing import List

class solution:
    def findLengthPfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        left = 0
        while left + 1 < n and arr[left] <= arr[left + 1]:
            left += 1
        if left == n - 1:
            return 0
        right = n - 1
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1
        result = min(n - left - 1, right)
        for i in range(left + 1):
            if arr[i] <= arr[right]:
                result = min(result, right - i - 1)
            elif right + 1 < n:
                right += 1
            else:
                break
        return result
    
    
    
if __name__ == "__main__":
    s = solution()
    print(s.findLengthPfShortestSubarray([1,2,3,10,4,2,3,5])) # 3
    print(s.findLengthPfShortestSubarray([5,4,3,2,1])) # 4