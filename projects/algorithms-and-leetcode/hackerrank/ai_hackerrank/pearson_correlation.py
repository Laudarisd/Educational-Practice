"""
Given the test scores of 10 students in Physics and History, compute Karl Pearson’s coefficient of correlation between these scores. Round the result to three decimal places.

Physics Scores  15  12  8   8   7   7   7   6   5   3
History Scores  10  25  17  11  13  17  20  13  9   15
Pearson's Correlation Coefficient

Where: -  is Pearson's correlation coefficient,
-  and  are the individual sample points,
-  and  are the means of the  and  values,
-  is the number of data points.

Output Format

Print the correlation coefficient as a floating-point value rounded to three decimal places, without leading or trailing spaces.

For example, if your answer is 0.255. In python you can print using

print("0.255")

"""



from typing import List
import matplotlib.pyplot as plt

class Correlation:
    # Constructor to initialize the class with two datasets A and B
    def __init__(self, list1: List[float], list2: List[float]):
        self.list1 = list1
        self.list2 = list2
        self.lenlist1 = len(list1)

    # Method to calculate the mean of a list
    def mean(self, data: List[float]) -> float:
        return sum(data) / len(data)

    # Method to calculate the numerator of Pearson's correlation
    def numerator(self) -> float:
        # Calculate means
        ave_list1 = self.mean(self.list1)
        ave_list2 = self.mean(self.list2)

        # Calculate the numerator sum
        return sum((self.list1[i] - ave_list1) * (self.list2[i] - ave_list2) for i in range(self.lenlist1))

    # Method to calculate the denominator of Pearson's correlation
    def denominator(self) -> float:
        # Calculate means
        ave_list1 = self.mean(self.list1)
        ave_list2 = self.mean(self.list2)

        # Compute squared differences sum
        sum_sq_x = sum((self.list1[i] - ave_list1) ** 2 for i in range(self.lenlist1))
        sum_sq_y = sum((self.list2[i] - ave_list2) ** 2 for i in range(self.lenlist1))

        # Calculate the denominator
        denominator_value = (sum_sq_x ** 0.5) * (sum_sq_y ** 0.5)
        return denominator_value

    # Method to calculate Pearson's correlation coefficient
    def correlation_calculator(self) -> float:
        return self.numerator() / self.denominator()

# Data
physics_scores = [15, 12, 8, 8, 7, 7, 7, 6, 5, 3]
history_scores = [10, 25, 17, 11, 13, 17, 20, 13, 9, 15]

# Compute Pearson correlation
correlation_calculator = Correlation(physics_scores, history_scores)
corr = correlation_calculator.correlation_calculator()

# Print in exact format with three decimal places
print(f"{corr:.3f}")


# --- PLOTTING ---
plt.figure(figsize=(6, 4))
plt.scatter(physics_scores, history_scores, color='blue', edgecolors='black', alpha=0.7)
plt.xlabel("Physics Scores")
plt.ylabel("History Scores")
plt.title(f"Scatter Plot (Pearson's r = {corr:.2f})")
plt.grid(True)
plt.show()
