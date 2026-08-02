#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        /*
        Main logic:
        ------------
        We want to traverse the matrix in a diagonal zig-zag order:
        - Start at (0,0).
        - Move "up-right" (↗) until hitting a boundary.
        - Then switch to "down-left" (↙) until hitting a boundary.
        - Continue switching until all elements are visited.

        Time complexity: O(m*n)  -> each element visited once
        Space complexity: O(1)   -> only result vector is extra
        */

        // Edge case: empty matrix
        if (mat.empty() || mat[0].empty()) {
            return {};
        }

        // Get dimensions
        int m = mat.size();
        int n = mat[0].size();

        // Output vector
        vector<int> result;
        result.reserve(m * n); // optimization: avoid reallocation

        // Starting point
        int r = 0, c = 0;

        // Direction: 1 = up-right, -1 = down-left
        int direction = 1;

        // Traverse exactly m*n elements
        for (int i = 0; i < m * n; i++) {
            // Add current element
            result.push_back(mat[r][c]);

            // Case 1: Moving up-right (↗)
            if (direction == 1) {
                if (c == n - 1) {   // right boundary → go down
                    r++;
                    direction = -1;
                }
                else if (r == 0) {  // top boundary → go right
                    c++;
                    direction = -1;
                }
                else {              // normal up-right move
                    r--;
                    c++;
                }
            }
            // Case 2: Moving down-left (↙)
            else {
                if (r == m - 1) {   // bottom boundary → go right
                    c++;
                    direction = 1;
                }
                else if (c == 0) {  // left boundary → go down
                    r++;
                    direction = 1;
                }
                else {              // normal down-left move
                    r++;
                    c--;
                }
            }
        }

        return result;
    }
};

// Example usage
int main() {
    Solution sol;

    vector<vector<int>> mat1 = {{1,2,3},{4,5,6},{7,8,9}};
    vector<int> res1 = sol.findDiagonalOrder(mat1);

    cout << "Output 1: ";
    for (int num : res1) cout << num << " ";
    cout << endl;

    vector<vector<int>> mat2 = {{1,2},{3,4}};
    vector<int> res2 = sol.findDiagonalOrder(mat2);

    cout << "Output 2: ";
    for (int num : res2) cout << num << " ";
    cout << endl;

    return 0;
}
