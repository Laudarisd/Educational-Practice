"""
problem: https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/?envType=daily-question&envId=2024-11-05
"""


class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        s = s + s
        prefix = [0] * (2 * n + 1)
        suffix = [0] * (2 * n + 1)
        for i in range(1, 2 * n + 1):
            prefix[i] = prefix[i - 1] + (i % 2 == 0 and s[i - 1] == '0')
        for i in range(2 * n - 1, -1, -1):
            suffix[i] = suffix[i + 1] + (i % 2 == 0 and s[i] == '1')
        ans = n
        for i in range(n):
            ans = min(ans, prefix[i] + suffix[i + n])
        return ans