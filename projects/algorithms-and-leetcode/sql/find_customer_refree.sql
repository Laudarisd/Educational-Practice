/* Problem
https://leetcode.com/problems/find-customer-referee/?envType=study-plan-v2&envId=top-sql-50
*/



SELECT id, name
FROM customer
WHERE referee_id IS NOT NULL or referee_id != 2;