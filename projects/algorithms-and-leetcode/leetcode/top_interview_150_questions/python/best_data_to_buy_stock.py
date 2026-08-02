"""
Best Time to Buy and Sell Stock
Solved
Easy
Topics
premium lock icon
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


"""

class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        min_price = float('inf') # Initialize to infinity because we want to find the minimum price
        max_profit = 0 # Ininitialize max profit to 0 because max profit cannot be negative

        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price

        return max_profit
    
    