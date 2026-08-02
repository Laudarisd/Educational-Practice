"""
Problem: https://leetcode.com/problems/pascals-triangle/description/
"""


from typing import List


class Solution:
    def generatePascalTrainagle(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
    
        # Initialize the first row
        triangle = [[1]]
        
        # Build each subsequent row
        for i in range(1, numRows):
            prev_row = triangle[-1]  # Get the previous row
            new_row = [1]  # Start the new row with 1
            
            # Compute the middle elements of the row
            for j in range(1, len(prev_row)):
                new_row.append(prev_row[j-1] + prev_row[j])
            
            new_row.append(1)  # End the new row with 1
            triangle.append(new_row)  # Add the new row to the triangle
        
        return triangle
    
    
    
# ======================= Second Approach =======================#

import math
from typing import List

class Solution:
    def generatePascalTriangle(self, numRows: int) -> List[List[int]]:
        result = []
        
        # Generate each row of Pascal's Triangle
        for n in range(numRows):
            row = []
            # Calculate each element in the row using binomial coefficients
            for k in range(n + 1):
                # Use the math.comb function to calculate binomial coefficient
                # math.comb(n, k) returns nCk = n! / (k! * (n-k)!)
                element = math.comb(n, k)
                row.append(element)
            result.append(row)
        
        return result
    
    
    



       
        
            
        
        