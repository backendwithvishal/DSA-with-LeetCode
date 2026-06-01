function matrixBlockSum(mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  // ── Step 1: Build the 2D Prefix Sum table ──────────────────────────────
  // prefix[i][j] = sum of all elements from (0,0) to (i-1, j-1)
  // We use 1-based indexing → prefix is (m+1) x (n+1) to avoid -1 checks

  const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] = mat[i - 1][j - 1]   // current cell
                   + prefix[i - 1][j]     // sum above
                   + prefix[i][j - 1]     // sum to the left
                   - prefix[i - 1][j - 1];// remove double-counted top-left
    }
  }

  // ── Step 2: Build the answer matrix using prefix sums ──────────────────

  const answer = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      // Clamp the window boundaries to stay inside the grid
      // +1 offset because prefix table is 1-indexed
      const r1 = Math.max(0, i - k);           // top boundary
      const c1 = Math.max(0, j - k);           // left boundary
      const r2 = Math.min(m - 1, i + k);       // bottom boundary
      const c2 = Math.min(n - 1, j + k);       // right boundary

      // Rectangle sum using inclusion-exclusion on prefix table
      answer[i][j] = prefix[r2 + 1][c2 + 1]   // full rectangle
                   - prefix[r1][c2 + 1]         // remove top strip
                   - prefix[r2 + 1][c1]         // remove left strip
                   + prefix[r1][c1];            // add back double-subtracted corner
    }
  }

  return answer;
}