"""
Problem: Minimum Obstacle removal to reach corner

You are given a 0-indexed 2D integer grid of size n x m. 
You are situated in the cell grid[0][0]. 
Each cell of grid is either empty i.e. 0 or contains an obstacle i.e. 1. 
You can move up, down, left, or right from your current cell if the next cell is not an obstacle. 
Return the minimum number of obstacles you need to remove to reach the cell grid[n-1][m-1].

Solution

The idea is to use BFS to find the shortest path from the top-left corner to the bottom-right corner.
We will use a queue to store the current position and the number of obstacles removed to reach that position.
We will also use a visited set to keep track of the visited positions.
We will start from the top-left corner and add it to the queue with 0 obstacles removed.
We will then iterate over the queue until it is empty.
For each position in the queue, we will check if it is the bottom-right corner.
If it is, we will return the number of obstacles removed to reach that position.
Otherwise, we will try to move up, down, left, or right from the current position.
If the next position is valid and not visited, we will add it to the queue with the number of obstacles removed incremented by 1.
We will also add the next position to the visited set.

Time complexity: O(n * m)
"""
from typing import List


class Solution:
    def minimumObstacles(self, grid:List[List[int]])  -> int:
        n = len(grid) # number of rows
        m = len(grid[0]) # number of columns
        queue = [(0, 0, 0)] # (x, y, obstacles)
        visited = set()  # set of visited positions
        visited.add((0, 0)) # add the top-left corner to the visited set
        while queue: # iterate over the queue until it is empty
            x, y, obstacles = queue.pop(0) # get the current position and the number of obstacles removed
            if x == n - 1 and y == m - 1: # check if the current position is the bottom-right corner
                return obstacles # return the number of obstacles removed
            for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]: # try to move up, down, left, or right
                nx, ny = x + dx, y + dy # get the next position
                if 0 <= nx < n and 0 <= ny < m and (nx, ny) not in visited: # check if the next position is valid and not visited
                    visited.add((nx, ny)) # add the next position to the visited set
                    if grid[nx][ny] == 1: # check if the next position is an obstacle
                        queue.append((nx, ny, obstacles + 1)) # add the next position to the queue with the number of obstacles removed incremented by 1
                    else: # if the next position is not an obstacle
                        queue.insert(0, (nx, ny, obstacles)) # add the next position to the queue with the same number of obstacles removed

        return -1 # return -1 if the bottom-right corner is not reachable
    
# Test cases

# Test case 1
# grid = [[0, 1, 1], [1, 1, 0], [1, 1, 0]] Output should be 2
# Explanation: Remove the obstacles at (0, 1) and (1, 0) to reach the bottom-right corner.
grid = [[0, 1, 1], [1, 1, 0], [1, 1, 0]]
sol = Solution()
print(sol.minimumObstacles(grid))



