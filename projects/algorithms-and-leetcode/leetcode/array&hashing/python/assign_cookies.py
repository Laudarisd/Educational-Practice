"""
Problem: https://leetcode.com/submissions/detail/1441693426/
"""

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        # Sort the greed factors and the cookie sizes
        g.sort()  # Sort greed factors
        s.sort()  # Sort cookie sizes
        
        child_i = 0  # Pointer for the greed factor list
        cookie_j = 0  # Pointer for the cookie size list
        content_children = 0  # Count of content children

        # Iterate while there are children and cookies left to check
        while child_i < len(g) and cookie_j < len(s):
            # Check if the current cookie can satisfy the current child
            if s[cookie_j] >= g[child_i]:
                # The child is content with this cookie
                content_children += 1
                child_i += 1  # Move to the next child
            # Move to the next cookie regardless of whether the current child was content or not
            cookie_j += 1  

        return content_children  # Return the total number of content children
