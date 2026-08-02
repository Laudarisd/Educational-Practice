"""
You are given a string array words, and an array groups, both arrays having length n.

The hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different.

You need to select the longest subsequence from an array of indices [0, 1, ..., n - 1], such that for the subsequence denoted as [i0, i1, ..., ik-1] having length k, the following holds:

For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.
words[ij] and words[ij+1] are equal in length, and the hamming distance between them is 1, where 0 < j + 1 < k, for all indices in the subsequence.
Return a string array containing the words corresponding to the indices (in order) in the selected subsequence. If there are multiple answers, return any of them.

Note: strings in words may be unequal in length.
"""


from typing import List

class Solution:
    def getWordsInLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        
        # --- Helper function to check if two words differ by exactly one character ---
        def hamming_distance_one(w1, w2):
            if len(w1) != len(w2):  # Must be same length to compare character by character
                return False
            diff = 0  # Count number of differing characters
            for c1, c2 in zip(w1, w2):  # Compare each character
                if c1 != c2:
                    diff += 1
                    if diff > 1:  # If more than one difference, return False
                        return False
            return diff == 1  # True only if exactly one character differs

        # --- Initialize ---
        n = len(words)
        dp = [1] * n         # dp[i] = length of longest valid subsequence ending at index i
        prev = [-1] * n      # prev[i] = previous index in the optimal subsequence (for backtracking)

        # --- Dynamic programming to build the longest valid subsequence ---
        for i in range(n):
            for j in range(i):  # Only look at earlier indices to maintain subsequence order
                # Conditions to extend a valid subsequence:
                # 1. Groups must be different
                # 2. Words must differ by exactly one character
                if groups[i] != groups[j] and hamming_distance_one(words[i], words[j]):
                    # If adding words[i] after words[j] creates a longer subsequence
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j] + 1  # Update dp[i] with new longer length
                        prev[i] = j        # Record the previous index for reconstruction

        # --- Find the index where the longest subsequence ends ---
        max_len = max(dp)         # Get the maximum length
        idx = dp.index(max_len)   # Get the index of that maximum

        # --- Reconstruct the subsequence using the prev[] array ---
        result = []
        while idx != -1:
            result.append(words[idx])  # Append current word
            idx = prev[idx]            # Move to the previous word in the chain

        return result[::-1]  # Reverse because we built the path backwards
