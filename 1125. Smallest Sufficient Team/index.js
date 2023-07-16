/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
function smallestSufficientTeam(req_skills, people) {
  const n = req_skills.length; // Number of required skills
  const m = people.length; // Number of people

  const skill_index = new Map(); // Map to store skill-to-index mapping

  // Populate the skill_index map with skill-to-index mapping
  for (let i = 0; i < n; i++) {
    skill_index.set(req_skills[i], i);
  }

  const dp = new Array(1 << n); // Array to store the minimum team for each skills mask
  dp[0] = []; // Base case: no skills required, so an empty team is sufficient

  // Iterate over each person and their skills
  for (let i = 0; i < m; i++) {
    let cur_skill = 0; // Current person's skills mask

    // Calculate the skills mask of the current person
    for (let s of people[i]) {
      cur_skill |= 1 << skill_index.get(s);
    }

    // Update the dp array for all previous skills masks
    for (let prev = 0; prev < dp.length; prev++) {
      if (dp[prev] === undefined) continue; // Skip if previous skills mask is not possible

      let comb = prev | cur_skill; // Combined skills mask

      // Check if the new combined skills mask has a smaller team size
      if (dp[comb] === undefined || dp[prev].length + 1 < dp[comb].length) {
        dp[comb] = [...dp[prev], i]; // Update the team with the current person
      }
    }
  }

  // Return the resulting team as an array of indices
  return dp[(1 << n) - 1].map((i) => i);
}
