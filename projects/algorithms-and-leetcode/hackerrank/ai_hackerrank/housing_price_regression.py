from typing import List
import matplotlib.pyplot as plt

class LinearRegression:
    """
    Multiple Linear Regression Model using the Normal Equation:
    
    β = (X^T X)^(-1) X^T Y
    
    Where:
    - β: Coefficients (weights) of the regression model
    - X: Feature matrix (houses' features like size)
    - Y: Target variable (price per square foot)
    - X^T: Transpose of matrix X
    - (X^T X)^(-1): Inverse of matrix multiplication X^T * X
    
    Prediction Formula:
    
    Y_pred = x_new * β
x_new refers to new house feature values that do not have prices.
In our implementation, x_new X_new is exactly x_test x_test. We use X_test to predict prices.
"""

    def __init__(self):
        self.beta = []

    def fit(self, X: List[List[float]], Y: List[float]):
        """
        Computes regression coefficients using the Normal Equation:
        β = (X^T X)^(-1) X^T Y
        """
        # Add bias term (1) as the first column
        X = [[1] + row for row in X]
        
        # Transpose X
        X_T = self.transpose(X)
        
        # Compute (X_T * X)
        XTX = self.matrix_multiply(X_T, X)
        
        # Compute (X_T * Y)
        XTY = self.matrix_vector_multiply(X_T, Y)
        
        # Compute (XTX)^-1
        XTX_inv = self.inverse(XTX)
        
        # Compute beta = (XTX)^-1 * (XTY)
        self.beta = self.matrix_vector_multiply(XTX_inv, XTY)

    def predict(self, X_new: List[List[float]]) -> List[float]:
        """
        Predicts prices using the learned regression coefficients:
        Y_pred = X_new * β
        """
        X_new = [[1] + row for row in X_new]  # Add bias term
        return [self.dot_product(row, self.beta) for row in X_new]

    @staticmethod
    def transpose(matrix: List[List[float]]) -> List[List[float]]:
        """ Transposes a matrix (rows to columns, columns to rows). """
        return list(map(list, zip(*matrix)))

    @staticmethod
    def matrix_multiply(A: List[List[float]], B: List[List[float]]) -> List[List[float]]:
        """ Multiplies two matrices A and B. """
        return [[sum(a * b for a, b in zip(A_row, B_col)) for B_col in zip(*B)] for A_row in A]

    @staticmethod
    def matrix_vector_multiply(A: List[List[float]], B: List[float]) -> List[float]:
        """ Multiplies matrix A by vector B. """
        return [sum(a * b for a, b in zip(A_row, B)) for A_row in A]

    @staticmethod
    def dot_product(A: List[float], B: List[float]) -> float:
        """ Computes the dot product of two vectors A and B. """
        return sum(a * b for a, b in zip(A, B))

    @staticmethod
    def inverse(matrix: List[List[float]]) -> List[List[float]]:
        """
        Computes the inverse of a square matrix using Gaussian elimination.
        """
        n = len(matrix)
        identity = [[1 if i == j else 0 for j in range(n)] for i in range(n)]
        aug_matrix = [matrix[i] + identity[i] for i in range(n)]

        # Forward elimination
        for i in range(n):
            pivot = aug_matrix[i][i]
            if pivot == 0:
                raise ValueError("Matrix is singular and cannot be inverted.")
            
            for j in range(2 * n):
                aug_matrix[i][j] /= pivot

            for k in range(n):
                if k != i:
                    factor = aug_matrix[k][i]
                    for j in range(2 * n):
                        aug_matrix[k][j] -= factor * aug_matrix[i][j]

        return [row[n:] for row in aug_matrix]

# --- Read input ---
# Example Data (house size and price per square foot)
X_train = [[1.0], [2.0], [3.0], [4.0], [5.0]]  # House sizes
Y_train = [300.0, 500.0, 700.0, 900.0, 1100.0]  # Prices per square foot

# Test data (new house sizes)
X_test = [[6.0], [7.0]]

# --- Train and predict ---
model = LinearRegression()
model.fit(X_train, Y_train)
predictions = model.predict(X_test)

# --- Plotting the regression ---
plt.figure(figsize=(10, 6))

# Plot training data (blue)
plt.scatter([x[0] for x in X_train], Y_train, color='blue', label="Training Data", edgecolors='black')

# Plot predictions (red)
plt.scatter([x[0] for x in X_test], predictions, color='red', label="Predicted Prices", edgecolors='black')

# Plot the regression line (green line)
X_vals = [x[0] for x in X_train] + [x[0] for x in X_test]
Y_vals = Y_train + predictions
plt.plot(X_vals, Y_vals, linestyle='-', color='green', label="Regression Line")

# Display price labels on points
for i, txt in enumerate(Y_train):
    plt.annotate(f"${txt:.0f}", (X_train[i][0], Y_train[i]), textcoords="offset points", xytext=(0,5), ha='center', fontsize=10, color='blue')

for i, txt in enumerate(predictions):
    plt.annotate(f"${txt:.0f}", (X_test[i][0], predictions[i]), textcoords="offset points", xytext=(0,5), ha='center', fontsize=10, color='red')

# Labels and Title
plt.xlabel("House Size")
plt.ylabel("Price per Square Foot")
plt.title("Multiple Linear Regression: Housing Prices")
plt.legend()
plt.grid(True)

# Display the plot
plt.show()

# Display predicted housing prices for test data
for i, prediction in enumerate(predictions):
    print(f"Predicted price per square foot for house {i+1}: ${prediction:.3f}")
