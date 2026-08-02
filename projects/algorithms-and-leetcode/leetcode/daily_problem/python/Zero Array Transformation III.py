class Solution:
    def maxRemoval(self, nums: List[int], queries: List[List[int]]) -> int:
        queries.sort(key=lambda x: x[0])  # Sort queries by left index (li) to process in order
        heap = []  # Max-heap to store right indices (ri) of queries, negated for max-heap behavior
        deltaArray = [0] * (len(nums) + 1)  # Difference array to track net decrements
        operations = 0  # Tracks total decrements applied to current index
        j = 0  # Index to iterate through sorted queries
        for i, num in enumerate(nums):  # Iterate through each index i and its required decrements (num)
            operations += deltaArray[i]  # Update operations with decrements starting at index i
            while j < len(queries) and queries[j][0] == i:  # Process all queries starting at index i
                heappush(heap, -queries[j][1])  # Push negated ri to heap (max-heap for largest ri)
                j += 1  # Move to next query
            while operations < num and heap and -heap[0] >= i:  # While we need more decrements and heap has valid queries
                operations += 1  # Apply one decrement to current index
                deltaArray[-heappop(heap) + 1] -= 1  # End the decrement after ri (pop largest ri)
            if operations < num:  # If we can't get enough decrements for nums[i]
                return -1  # Impossible to make zero array
        return len(heap)  # Number of unused queries in heap is the number that can be removed
