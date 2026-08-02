"""
You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.

"""


from collections import Counter

class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:


        # Count the frequency of each digit in the original number
        original_count = Counter(str(n))

        # Check all powers of 2 up to 10^9
        for i in range(31):  # 2^30 is 1073741824, which is > 10^9
            power_of_2 = 1 << i  # This is 2^i
            if Counter(str(power_of_2)) == original_count:
                return True

        return False
