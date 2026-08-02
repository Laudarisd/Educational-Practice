"""
Problem: https://leetcode.com/problems/relative-ranks/description/
"""

class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sortedNums = sorted(score, reverse=True)
        numsMap = {}
        for i in range(len(sortedNums)):
            if i == 0:
                numsMap[sortedNums[i]] = 'Gold Medal'
            elif i == 1:
                numsMap[sortedNums[i]] = 'Silver Medal'
            elif i == 2:
                numsMap[sortedNums[i]] = 'Bronze Medal'
            else:
                numsMap[sortedNums[i]] = str(i+1)
        result = []
        for num in score:
            result.append(numsMap[num])
        return result
            


        