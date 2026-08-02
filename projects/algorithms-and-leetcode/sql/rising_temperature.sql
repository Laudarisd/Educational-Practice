"""
Problem: https://leetcode.com/problems/rising-temperature/description/?envType=study-plan-v2&envId=top-sql-50
"""


SELECT w1.id
FROM Weather w1
JOIN Weather w2
ON w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAy)
WHERE w1.temperature > w2.temperature;