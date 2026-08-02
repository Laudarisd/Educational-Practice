"""
Problem: https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/?envType=daily-question&envId=2024-11-22
"""

from typing import Counter, List

class solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        cnt = Counter()
        for row in matrix:
            t = tuple(row) if row[0] == 0 else tuple(x ^ 1 for x in row)
            
            print(tuple(row))
            print(tuple(x ^ 1 for x in row))
            cnt[t] += 1
            
        return max(cnt.values())
    
    
    

if __name__ == '__main__':
    test = solution()
    print(test.maxEqualRowsAfterFlips([[0,1],[1,1]]))
    
    
            
        