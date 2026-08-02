"""
Problem: https://leetcode.com/problems/can-place-flowers/description/
"""

from typing import List

class Solution:
    def canPlaceFlower(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        for i in range(len(flowerbed)):
            # print(i)
            if flowerbed[i] == 0 and (i == 0 or flowerbed[i-1] == 0) and (i == len(flowerbed) - 1 or flowerbed[i+1] == 0):
                print(flowerbed[i])
                flowerbed[i] = 1
                count += 1
        return count >= n



if __name__ == '__main__':
    flowerbed = [1,0,0,0,1]
    n = 2
    sol = Solution()
    print(sol.canPlaceFlower(flowerbed, n))