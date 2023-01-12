/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

const ord = (c) => c.charCodeAt();

let g, f, s, res;
const countSubTrees = (n, edges, labels) => {
    g = initializeGraph(n), f = Array(26).fill(0), s = labels, res = Array(n).fill(0);
    packUG(g, edges);
    dfs(0, -1);
    return res;
};

const dfs = (cur, pa) => {
    let cnt = f[ord(s[cur]) - 97]++;
    for (const child of g[cur]) {
        if (child != pa) dfs(child, cur);
    }
    res[cur] = f[ord(s[cur]) - 97] - cnt;
};