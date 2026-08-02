"""
Problem: https://leetcode.com/submissions/detail/1441694692/
"""

class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        if not grid:  # Check for an empty grid
            return 0

        perimeter = 0
        rows = len(grid)
        cols = len(grid[0])

        # Directions for neighbors: up, down, left, right
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        # Iterate through each cell in the grid
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:  # Only consider land cells
                    for dr, dc in directions:
                        nr, nc = r + dr, c + dc  # Neighbor coordinates
                        # Check if the neighbor is out of bounds or water
                        if nr < 0 or nr >= rows or nc < 0 or nc >= cols or grid[nr][nc] == 0:
                            perimeter += 1  # Count this side of the land cell

        return perimeter  # Return the calculated perimeter
        
