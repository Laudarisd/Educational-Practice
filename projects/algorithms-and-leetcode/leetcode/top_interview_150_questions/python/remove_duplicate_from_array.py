"""
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

"""


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0  # Handle empty array edge case

        unique_list = 0  # Pointer to track the last unique element's position

        # Start from index 1 and scan the rest
        for i in range(1, len(nums)):
            if nums[i] != nums[unique_list]:  # Found a new unique element
                unique_list += 1             # Move the unique pointer forward
                nums[unique_list] = nums[i]  # Place the new unique element there

        return unique_list + 1  # Total number of unique elements




        