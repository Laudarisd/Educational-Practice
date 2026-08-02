from typing import List

class Regression:
    # Constructor to initialize the class with two datasets A and B
    def __init__(self, list1: List[float], list2: List[float]):
        self.list1 = list1
        self.list2 = list2
        self.lenlist1 = len(list1)

    # Method to calculate the mean of a list
    def mean(self, data: List[float]) -> float:
        return sum(data) / len(data)

    # Method to calculate the slope
    def calculate_slope(self) -> float:
        # Calculate means
        ave_list1 = self.mean(self.list1)
        ave_list2 = self.mean(self.list2)
        # Calculate the numerator sum
        numerator = sum((self.list1[i] - ave_list1) * (self.list2[i] - ave_list2) for i in range(self.lenlist1))
        denominator = sum((self.list1[i] - ave_list1) **2 for i in range(self.lenlist1))
        
        cal_slope = numerator/denominator
        
        return round(cal_slope, 3)
        


    # Method to calculate the denominator of Pearson's correlation
    def denominator(self) -> float:
        # Calculate means
        ave_list1 = self.mean(self.list1)
        #ave_list2 = self.mean(self.list2)

        # Compute squared differences sum
        sum_sq_x = sum((self.list1[i] - ave_list1) ** 2 for i in range(self.lenlist1))
        # sum_sq_y = sum((self.list2[i] - ave_list2) ** 2 for i in range(self.lenlist1))

        # Calculate the denominator
        # denominator_value = (sum_sq_x ** 0.5) * (sum_sq_y ** 0.5)
        #return denominator_value
        return sum_sq_x

    # Method to calculate Pearson's correlation coefficient
    def correlation_calculator(self) -> float:
        return self.numerator() / self.denominator()

# Data
physics_scores = [15, 12, 8, 8, 7, 7, 7, 6, 5, 3]
history_scores = [10, 25, 17, 11, 13, 17, 20, 13, 9, 15]

# Compute regression slope
regression = Regression(physics_scores, history_scores)
slope = regression.calculate_slope()
# Print the correct slope formatted to 3 decimal places
print(f"{slope:.3f}")
