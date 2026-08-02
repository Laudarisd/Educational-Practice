class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        # Get dimensions of the matrix
        m, n = len(matrix), len(matrix[0])  # m is number of rows, n is number of columns
        
        # Variables to track if first row and first column need to be zeroed
        first_row_has_zero = False  # Tracks if any element in first row is 0
        first_col_has_zero = False  # Tracks if any element in first column is 0
        
        # Check first row for zeros
        for j in range(n):  # Iterate through columns in first row
            if matrix[0][j] == 0:  # If a zero is found
                first_row_has_zero = True  # Mark first row as needing to be zeroed
                break  # No need to check further
        
        # Check first column for zeros
        for i in range(m):  # Iterate through rows in first column
            if matrix[i][0] == 0:  # If a zero is found
                first_col_has_zero = True  # Mark first column as needing to be zeroed
                break  # No need to check further
        
        # Use first row and first column as markers for rest of matrix
        for i in range(1, m):  # Start from row 1 to avoid first row
            for j in range(1, n):  # Start from column 1 to avoid first column
                if matrix[i][j] == 0:  # If current element is 0
                    matrix[i][0] = 0  # Mark first cell in this row to indicate row i should be zeroed
                    matrix[0][j] = 0  # Mark first cell in this column to indicate column j should be zeroed
        
        # Set rows to zero based on markers in first column
        for i in range(1, m):  # Iterate through rows, starting from row 1
            if matrix[i][0] == 0:  # If marker in first column is 0
                for j in range(1, n):  # Set all elements in row i (except first column) to 0
                    matrix[i][j] = 0
        
        # Set columns to zero based on markers in first row
        for j in range(1, n):  # Iterate through columns, starting from column 1
            if matrix[0][j] == 0:  # If marker in first row is 0
                for i in range(1, m):  # Set all elements in column j (except first row) to 0
                    matrix[i][j] = 0
        
        # Handle first row if it needs to be zeroed
        if first_row_has_zero:  # If first row had a zero originally
            for j in range(n):  # Set all elements in first row to 0
                matrix[0][j] = 0
        
        # Handle first column if it needs to be zeroed
        if first_col_has_zero:  # If first column had a zero originally
            for i in range(m):  # Set all elements in first column to 0
                matrix[i][0] = 0
        
