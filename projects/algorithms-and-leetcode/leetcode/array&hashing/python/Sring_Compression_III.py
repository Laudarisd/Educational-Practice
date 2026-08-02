"""
Problem: https://leetcode.com/problems/string-compression-iii/description/?envType=daily-question&envId=2024-11-04

Example 1:
Input: word = "abcde"
Output: "1a1b1c1d1e"
"""

from itertools import groupby
from typing import List, Dict, Tuple

class Solution:
    def compressesString(self, word:str) -> str:
        groupped_by = groupby(word)  # Group the word by the character
        compressed = [] # Initialize an empty list to store the compressed word
        
        for key, group in groupped_by:
            len_group = len(list(group)) # Get the length of the group
            while len_group:
                min_len = min(len_group, 9) # Get the minimum length between the length of the group and 9
                compressed.append(str(min_len) + key) # Append the minimum length and the character to the compressed list
                len_group -= min_len
                
        return "".join(compressed)

        
if __name__ == '__main__':
    S = Solution()
    test = "aaabcccd"
    print(S.compressesString(test))
    
    
        