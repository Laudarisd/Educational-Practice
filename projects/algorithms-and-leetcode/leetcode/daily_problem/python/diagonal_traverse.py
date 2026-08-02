"""
Diagonal Traverse
Medium
Topics
premium lock icon
Companies
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
"""

from typing import List

class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        """
        Main logic:
        ------------
        We want to traverse a matrix in a diagonal zig-zag order.
        - Start at (0,0).
        - Move "up-right" (↗) until hitting a boundary.
        - Then switch to "down-left" (↙) until hitting a boundary.
        - Repeat until all elements are collected.

        This works because each move either goes diagonally or changes direction 
        when hitting the matrix borders.
        Time complexity: O(m*n)  -> each element visited once
        Space complexity: O(1)   -> only result list is extra
        """
        # Edge case: empty matrix
        if not mat or not mat[0]:
            return []
        # Get dimensions of the matrix
        m, n = len(mat), len(mat[0])
        #print(m, n)
        # Store output in a list
        result = []

        # Start from the top-left element
        r, c = 0, 0 # row 0 and column 0
        # Direction = 1 means moving up-right  (diag), -1 means down-left(diag)
        direction = 1
        # We must cover every element exactly once
        for _ in range(m * n):
            # Add the current element exactly once
            result.append(mat[r][c])
            #print(mat[r][c])
            # Case 1: Moving up-right
            if direction == 1:
                if c == n - 1: # If at right bundary, must go down
                    r += 1
                    direction = -1 # Because we hit the right boundary
                elif r == 0: # if at top boundary, must got right
                    c += 1
                    direction = -1
                else: # Otherwise move diagonally
                    r -= 1
                    c += 1

            # Case 2: Moving down-left
            else:
                if r == m - 1: # if at bottom boundary, must go right
                    c += 1
                    direction = 1
                elif c == 0: # if at left boundary, must go down
                    r += 1
                    direction = 1
                else: # Otherwise move diagonally
                    r += 1
                    c -= 1

        return result

        #print(result)




if __name__ == "__main__":
    sol = Solution()
    example1 = [[1,2,3],[4,5,6],[7,8,9]]
    print(sol.findDiagonalOrder(example1))  # [1,2,4,7,5,3,6,8,9]

