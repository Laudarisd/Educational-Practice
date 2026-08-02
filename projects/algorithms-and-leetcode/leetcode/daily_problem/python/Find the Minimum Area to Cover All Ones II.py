"""
You are given a 2D binary array grid. You need to find 3 non-overlapping rectangles having non-zero areas with horizontal and vertical sides such that all the 1's in grid lie inside these rectangles.

Return the minimum possible sum of the area of these rectangles.

Note that the rectangles are allowed to touch.
Input: grid = [[1,0,1],[1,1,1]]

Output: 5

Input: grid = [[1,0,1,0],[0,1,0,1]]

Output: 5



"""

from typing import List
import sys

class Solution:
    def minimumSum2(self, grid: List[List[int]], u: int, d: int, l: int, r: int) -> int:
        # Find the smallest rectangle covering all 1's in the subgrid [u:d+1][l:r+1]
        min_i, max_i = len(grid), -1
        min_j, max_j = len(grid[0]), -1
        for i in range(u, d + 1):
            for j in range(l, r + 1):
                if grid[i][j] == 1:
                    min_i = min(min_i, i)
                    max_i = max(max_i, i)
                    min_j = min(min_j, j)
                    max_j = max(max_j, j)
        # If there are no 1's, return a large value (invalid)
        return (max_i - min_i + 1) * (max_j - min_j + 1) if min_i <= max_i else sys.maxsize // 3

    def rotate(self, vec: List[List[int]]) -> List[List[int]]:
        # Rotate the grid 90 degrees counterclockwise
        n, m = len(vec), len(vec[0])
        ret = [[0] * n for _ in range(m)]
        for i in range(n):
            for j in range(m):
                ret[m - j - 1][i] = vec[i][j]
        return ret

    def solve(self, grid: List[List[int]]) -> int:
        n, m = len(grid), len(grid[0])
        res = n * m * 3  # Upper bound for area sum

        # Try all possible horizontal and vertical splits
        for i in range(n - 1):
            for j in range(m - 1):
                # Horizontal then vertical split
                res = min(
                    res,
                    self.minimumSum2(grid, 0, i, 0, m - 1)
                    + self.minimumSum2(grid, i + 1, n - 1, 0, j)
                    + self.minimumSum2(grid, i + 1, n - 1, j + 1, m - 1),
                )
                # Vertical then horizontal split
                res = min(
                    res,
                    self.minimumSum2(grid, 0, i, 0, j)
                    + self.minimumSum2(grid, 0, i, j + 1, m - 1)
                    + self.minimumSum2(grid, i + 1, n - 1, 0, m - 1),
                )

        # Try all possible splits with two horizontal lines
        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                res = min(
                    res,
                    self.minimumSum2(grid, 0, i, 0, m - 1)
                    + self.minimumSum2(grid, i + 1, j, 0, m - 1)
                    + self.minimumSum2(grid, j + 1, n - 1, 0, m - 1),
                )
        return res

    def minimumSum(self, grid: List[List[int]]) -> int:
        # Try both original and rotated grid for all split possibilities
        rgrid = self.rotate(grid)
        return min(self.solve(grid), self.solve(rgrid))

# Example usage:
if __name__ == '__main__':
    sol = Solution()
    example1 = [[1,0,1],[1,1,1]]
    print(sol.minimumSum(example1))  # Output: 5
    example2 = [[1,0,1,0],[0,1,0,1]]
    print(sol.minimumSum(example2))  # Output: 5