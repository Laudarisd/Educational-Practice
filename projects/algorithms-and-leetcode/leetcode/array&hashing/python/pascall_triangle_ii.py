"""
Problem: https://leetcode.com/problems/pascals-triangle-ii/description/
"""

from typing import List, Dict

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        first_row = [1] * (rowIndex + 1) # initially it will 1
        # Starting from second row
        for i in range(2, rowIndex + 1):
            for j in range(i-1, 0, -1):
                first_row[j] += first_row[j-1]
                
        return first_row
    
    

if __name__ == "__main__":
    run = Solution()
    print(run.getRow(3)) # [1,3,3,1])
        
        
         
        

        