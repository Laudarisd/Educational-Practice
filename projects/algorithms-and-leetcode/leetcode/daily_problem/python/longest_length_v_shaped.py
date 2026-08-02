"""
Hard
Topics
premium lock icon
Companies
Hint
You are given a 2D integer matrix grid of size n x m, where each element is either 0, 1, or 2.

A V-shaped diagonal segment is defined as:

The segment starts with 1.
The subsequent elements follow this infinite sequence: 2, 0, 2, 0, ....
The segment:
Starts along a diagonal direction (top-left to bottom-right, bottom-right to top-left, top-right to bottom-left, or bottom-left to top-right).
Continues the sequence in the same diagonal direction.
Makes at most one clockwise 90-degree turn to another diagonal direction while maintaining the sequence.


Return the length of the longest V-shaped diagonal segment. If no valid segment exists, return 0.

 

Example 1:

Input: grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]

Output: 5

Explanation:



The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,2) → (1,3) → (2,4), takes a 90-degree clockwise turn at (2,4), and continues as (3,3) → (4,2).

Example 2:

Input: grid = [[2,2,2,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]

Output: 4

Explanation:



The longest V-shaped diagonal segment has a length of 4 and follows these coordinates: (2,3) → (3,2), takes a 90-degree clockwise turn at (3,2), and continues as (2,1) → (1,0).

Example 3:

Input: grid = [[1,2,2,2,2],[2,2,2,2,0],[2,0,0,0,0],[0,0,2,2,2],[2,0,0,2,0]]

Output: 5

Explanation:



The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,0) → (1,1) → (2,2) → (3,3) → (4,4).

Example 4:

Input: grid = [[1]]

Output: 1

Explanation:

The longest V-shaped diagonal segment has a length of 1 and follows these coordinates: (0,0).

 

Constraints:

n == grid.length
m == grid[i].length
1 <= n, m <= 500
grid[i][j] is either 0, 1 or 2.
"""

from typing import List
from functools import cache


class Solution:
    def lenOfVDiagonal(self, grid: List[List[int]]) -> int:
        """
        DFS with memoization:
        - Start at every cell with value 1.
        - Explore diagonals (4 directions).
        - At most one clockwise turn allowed.
        - Sequence rule: 1 -> 2 -> 0 -> 2 -> 0 -> ...
        """

        # 4 diagonal directions: ↘️, ↙️, ↖️, ↗️
        DIRS = [(1, 1), (1, -1), (-1, -1), (-1, 1)]
        m, n = len(grid), len(grid[0])

        @cache
        def dfs(cx: int, cy: int, direction: int, can_turn: bool, target: int) -> int:
            """
            Try to continue the V-segment starting from (cx, cy).
            Args:
              cx, cy    : current cell
              direction : current diagonal direction index
              can_turn  : whether we still have a turn available
              target    : expected next value (2 or 0 alternating)
            Returns:
              max additional steps from this state
            """
            nx, ny = cx + DIRS[direction][0], cy + DIRS[direction][1]

            # stop if out of bounds or wrong value
            if nx < 0 or ny < 0 or nx >= m or ny >= n or grid[nx][ny] != target:
                return 0

            # continue straight
            max_step = dfs(nx, ny, direction, can_turn, 2 - target)

            # try one clockwise turn
            if can_turn:
                nd = (direction + 1) % 4  # clockwise next diagonal
                max_step = max(max_step, dfs(nx, ny, nd, False, 2 - target))

            return max_step + 1  # count this step

        res = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:  # must start with 1
                    for direction in range(4):
                        # Start at (i,j), expect next = 2
                        length = dfs(i, j, direction, True, 2) + 1
                        res = max(res, length)

        return res

