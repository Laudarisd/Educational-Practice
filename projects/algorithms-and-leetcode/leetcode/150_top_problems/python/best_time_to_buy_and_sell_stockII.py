"""
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

"""
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """This is a DP programming problem."""
        max_profit = 0
        for i in range(1, len(prices)):
            #print(i)
            if prices[i] > prices[i - 1]:
                #print(prices[i], prices[i - 1])
                max_profit += prices[i] -  prices[i -1]
                print(max_profit)
        return max_profit
    


if __name__ == "__main__":
    prices = [7, 1, 5, 3, 6, 4]
    solution = Solution()
    print(solution.maxProfit(prices))  # Output: 7
    # prices = [1, 2, 3, 4, 5]
    # print(solution.maxProfit(prices)) # Output: 4