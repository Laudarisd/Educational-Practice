# LeetCode Practice: Array & Hashing
Welcome to my LeetCode journey focusing on **Array** and **Hashing**!  
This repository documents learning, solutions, and notes—starting from the absolute basics, moving to advanced concepts, and covering common interview patterns.
---
## Table of Contents 

- [Introduction](#introduction)
- [1. Arrays](#1-arrays)
  - [1.1 What is an Array?](#11-what-is-an-array)
  - [1.2 Basic Operations](#12-basic-operations)
  - [1.3 Array Patterns](#13-array-patterns)
  - [1.4 Example Problems](#14-example-problems)
- [2. Hashing (Hash Table)](#2-hashing-hash-table)
  - [2.1 What is Hashing?](#21-what-is-hashing)
  - [2.2 HashMap & HashSet in Python](#22-hashmap--hashset-in-python)
  - [2.3 Hashing Patterns](#23-hashing-patterns)
  - [2.4 Example Problems](#24-example-problems)
- [3. Advanced Problems](#3-advanced-problems)
- [4. Useful Resources](#4-useful-resources)
- [5. Notes & Tips](#5-notes--tips)

---
## Introduction
Arrays and Hash Tables are **fundamental** data structures in computer science, used everywhere from basic algorithms to high-frequency coding interviews.

### 1.1 What is an Array?
An array is a collection of items stored at contiguous memory locations.

- **Python equivalent:** `list`

#### Example

```pyhton
arr = [1, 2, 3, 4, 5]
print(arr[2]) # Output:3
```

#### 1.2 Basic Operations

| Operation       | Example (Python)    |
| --------------- | ------------------- |
| Access element  | `arr[0]`            |
| Update element  | `arr[2] = 99`       |
| Add at end      | `arr.append(6)`     |
| Insert at index | `arr.insert(1, 10)` |
| Delete by value | `arr.remove(3)`     |
| Delete by index | `del arr[1]`        |
| Length          | `len(arr)`          |
| Slice           | `arr[1:3]`          |


#### 1.3 Arrays Patterns

1. Two Pointers
- Use two indices to traverse/compare elements
- Example: Find if an array has two numbers that sum to target

**Check more examples in [two_pointers](../two_pointers/)**

2. Sliding Window
- Use a window(subarray) to process a range of elements.
- Example: Find maximum sum of k consecutive elements.

**Check more examples in [sliding_window](../sliding_window/)


3. Prefix Sum
- Precompute sums to answer range queries efficiently.
- Example: Find sum of elements between i and j in o(1) time.

---
---
#### 1.4 Example Problems

```python
arr = [2, 5, 1, 8, 3]
max_val = max(arr)
print(max_val)

#Output: 8
```

Example 2: Reverse Array

```python
Copy
Edit
arr = [1, 2, 3, 4]
arr.reverse()
print(arr)  # Output: [4, 3, 2, 1]
Example 3: Two Sum (Using Two Pointers)
python
Copy
Edit
def two_sum(arr, target):
    arr.sort()  # two-pointer requires sorted
    left, right = 0, len(arr)-1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return True
        elif s < target:
            left += 1
        else:
            right -= 1
    return False

print(two_sum([2, 7, 11, 15], 9))  # Output: True
```

---
---
## 2. Hashing (Hash Table)
2.1 What is Hashing?
Hashing is a technique to map data (keys) to a fixed-size value (hash) for fast lookup, insert, and delete.

Python: dict (hash map), set (hash set)

Average time: O(1) for insert, lookup, and delete


2.2 HashMap & HashSet in Python
```python
Copy
Edit
# HashMap
d = {'apple': 2, 'banana': 5}
d['orange'] = 3  # Insert

# HashSet
s = set()
s.add(1)
s.add(2)
```
