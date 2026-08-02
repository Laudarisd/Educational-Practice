// Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n]

class Solution {
public:
    int findKthNumber(int n, int k) {
        // Function to count numbers with a given prefix
        auto count_steps = [&](long prefix, long n) -> long {
            long count = 0;  // Initialize count of numbers
            long curr = prefix;  // Current prefix at current depth
            long next_prefix = prefix + 1;  // Next prefix for range
            while (curr <= n) {  // Continue while prefix is within n
                count += min(n + 1, next_prefix) - curr;  // Add numbers in [curr, min(n+1, next_prefix))
                curr *= 10;  // Move to next depth (append 0)
                next_prefix *= 10;  // Update next prefix
            }
            return count;  // Return total count
        };
        
        long curr = 1;  // Start with prefix 1
        k = k - 1;  // Convert to 0-based index
        
        while (k > 0) {  // Continue until k-th number is found
            long steps = count_steps(curr, n);  // Count numbers with current prefix
            if (steps <= k) {  // If steps <= k, skip this prefix
                k -= steps;  // Reduce k by skipped numbers
                curr += 1;  // Move to next sibling prefix
            } else {  // If steps > k, k-th number is in this prefix
                k -= 1;  // Account for current prefix
                curr *= 10;  // Go deeper (append 0)
            }
        }
        
        return curr;  // Return k-th number
    }
};