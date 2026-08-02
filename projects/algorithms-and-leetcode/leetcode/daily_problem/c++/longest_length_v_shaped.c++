#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    int lenOfVDiagonal(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();

        // 4 diagonal directions ↘️, ↙️, ↖️, ↗️
        vector<pair<int,int>> DIRS = {{1,1}, {1,-1}, {-1,-1}, {-1,1}};

        // memoization: dp[cx][cy][dir][canTurn][target]
        // initialize with -1 (uncomputed)
        static int dp[505][505][4][2][2];
        for(int i=0;i<m;i++)
            for(int j=0;j<n;j++)
                for(int d=0;d<4;d++)
                    for(int t=0;t<2;t++)
                        for(int v=0;v<2;v++)
                            dp[i][j][d][t][v] = -1;

        function<int(int,int,int,bool,int)> dfs = [&](int cx, int cy, int dir, bool canTurn, int target) -> int {
            int nx = cx + DIRS[dir].first;
            int ny = cy + DIRS[dir].second;

            if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] != target) {
                return 0;
            }

            int turnFlag = canTurn ? 1 : 0;
            int targetFlag = (target == 2 ? 0 : 1); 
            // target=2 → store as 0, target=0 → store as 1 (two possible values)

            int &res = dp[nx][ny][dir][turnFlag][targetFlag];
            if(res != -1) return res;

            // continue straight
            res = dfs(nx, ny, dir, canTurn, 2 - target);

            // try clockwise turn
            if(canTurn) {
                int nd = (dir + 1) % 4;
                res = max(res, dfs(nx, ny, nd, false, 2 - target));
            }

            return res = res + 1; // include this step
        };

        int ans = 0;
        // start from all cells with value 1
        for(int i=0;i<m;i++) {
            for(int j=0;j<n;j++) {
                if(grid[i][j] == 1) {
                    for(int dir=0;dir<4;dir++) {
                        ans = max(ans, dfs(i, j, dir, true, 2) + 1);
                    }
                }
            }
        }
        return ans;
    }
};
