class Solution:
    def dfs(self, node, k, adj, vis, par):
        vis[node] = True
        cnt = 1
        if k > 0:
            for neighbor in adj[node]:
                if neighbor != par:
                    cnt += self.dfs(neighbor, k - 1, adj, vis, node)
        return cnt

    def maxTargetNodes(self, edges1, edges2, k):
        n1 = len(edges1) + 1
        n2 = len(edges2) + 1
        adj1 = [[] for _ in range(n1)]
        adj2 = [[] for _ in range(n2)]

        for u, v in edges1:
            adj1[u].append(v)
            adj1[v].append(u)
        for u, v in edges2:
            adj2[u].append(v)
            adj2[v].append(u)

        if k == 0:
            return [1] * n1

        maxi = 0
        for i in range(n2):
            vis = [False] * n2
            cnt = self.dfs(i, k - 1, adj2, vis, -1)
            maxi = max(maxi, cnt)

        ans = []
        for i in range(n1):
            vis = [False] * n1
            cnt = self.dfs(i, k, adj1, vis, -1)
            ans.append(cnt + maxi)

        return ans