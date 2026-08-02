


class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        total_sunm = n * (n + 1) //2
        
        # Find the number not divisible by m in n
        not_divisible_by_m = n // m # // is integer division
        # Find the sum of numbers divisible by m in n
        divisible_by_m = m * (not_divisible_by_m * (not_divisible_by_m + 1)) // 2 # Formula: m * (k * (k + 1)) // 2 where k is the number of multiples of m in n
        # Total sum of not divisible by m in n
        not_divisible_by_m = total_sunm - divisible_by_m
        return not_divisible_by_m - divisible_by_m