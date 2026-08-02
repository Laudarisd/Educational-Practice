"""

Problem: https://leetcode.com/problems/reshape-the-matrix/description/
"""


from typing import List

class Solution:
        def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
            if r * c != len(mat) * len(mat[0]):
                return mat
            result = []
            temp = []
            for i in range(len(mat)):
                for j in range(len(mat[0])):
                    temp.append(mat[i][j])
                    if len(temp) == c:
                        result.append(temp)
                        temp = []
            return result
        
if __name__ == '__main__':
    run = Solution()
    print(run.matrixReshape([[1,2],[3,4]], 1, 4))  # [[1,2,3,4]]
