# N Puzzle is a sliding blocks game that takes place on a k * k grid with ((k * k) - 1) tiles each numbered from 1 to N. Your task is to reposition the tiles to their proper order.

"""
N-Puzzle Solver (k x k grid, 0 = empty)
- Input:
    k
    k*k lines: tile values in row-major order (top-left -> bottom-right)

- Output:
    M            # number of moves
    <move_1>
    ...
    <move_M>     # each in {UP, DOWN, LEFT, RIGHT} indicating empty-cell moves

Algorithm:
- A* search with Manhattan distance + Linear Conflict heuristic (admissible & consistent)
- Solvability check based on inversion parity
"""

import sys
import heapq # Priority queue for A* search, fast state exploration
from collections import deque # Queue for BFS-like state exploration

def read_iniput():
    
