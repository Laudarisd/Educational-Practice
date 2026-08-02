"""
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

"""
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # If the list has len less than 2 it is already valid
        if len(nums) <= 2:
            return len(nums)
        # `i` points to the index where the next valid element will be placed
        i = 2  # Start from the 3rd position

        for j in range(2, len(nums)):
            # Compare current element with the element two positions before
            # If they are not the same, it's allowed to appear
            if nums[j] != nums[i - 2]:
                nums[i] = nums[j]
                i += 1  # Move the insertion point

        return i  # New length of the valid array
        