// Best Time to Buy and Sell Stock
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

#include <vector> // library to use vector for storing stock prices


class Solution {
    public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX; // Inintialize minPrice to the maximum possible integer value
        int maxProfit = 0; // Initialize maxProfit to 0

        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            } else {
                continue;
            }
            // If the current price is less than min price update minPrice

            }
            return maxProfit;
        }
};
