"""
Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
"""

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0 
        min_price = float('inf') # This will be the minimum price
        
        for price in prices:
            if price< min_price:
                min_price = price
            else:
                max_profit = max(max_profit, price - min_price)
                
        return max_profit
    