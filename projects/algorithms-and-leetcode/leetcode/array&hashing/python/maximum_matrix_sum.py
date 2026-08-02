"""
Problem: https://leetcode.com/problems/maximum-matrix-sum/description/?envType=daily-question&envId=2024-11-24
"""

class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        abs_min = float('inf') # minimum absolulte value in matrix
        cnt = 0 # counter of negative number
        abs_sum = 0 # sum of absolute values

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] < 0:
                    cnt += 1
                
                abs_min = min(abs(matrix[i][j]), abs_min) #
                abs_sum += abs(matrix[i][j])
            
        return abs_sum if cnt % 2 == 0 else abs_sum - abs_min * 2