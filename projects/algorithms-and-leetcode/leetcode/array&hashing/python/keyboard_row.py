"""
Problem: https://leetcode.com/problems/keyboard-row/submissions/

"""

from typing import List

class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        #Define the rows
        row1 = set("qwertyuiop")
        row2 = set("asdfghjkl")
        row3 = set("zxcvbnm")

        result = []
        # Loop through each word in the input list

        for word in words:
            lower_word = word.lower()
            # Check if all letters of the word are in one row
            # First, identify the row the first letter belongs to
            if all(letter in row1 for letter in lower_word):
                result.append(word)
            elif all(letter in row2 for letter in lower_word):
                result.append(word)
            elif all(letter in row3 for letter in lower_word):
                result.append(word)
        return result


        