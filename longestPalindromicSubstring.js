/**
 * 5. Longest Palindromic Substring
 * Difficulty: Medium
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * - 1 <= s.length <= 1000
 * - s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  // Your solution here
  const sL = s.length
  let longest = ""
  for (let i = 0; i < sL; i++) {
    const stringOdd = expand(s, i, i)
    const stringEven = expand(s, i, i + 1)

    longest = stringOdd.length > longest.length ? stringOdd : longest
    longest = stringEven.length > longest.length ? stringEven : longest
  }
  return longest
}

function expand(s, left, right) {
  const sL = s.length
  while (left >= 0 && right < sL && s[left] === s[right]) {
    left--
    right++
  }

  return s.substring(left + 1, right)
}

/**
 * O(n) Manacher's algorithm
 * @param {string} s
 * @return {string}
 */
function longestPalindrome2(s) {
  if (!s || s.length < 2) return s

  // Transform: ^ and $ are sentinels to avoid bounds checks
  // Example: "abba" -> "^#a#b#b#a#$"
  const T = "^#" + s.split("").join("#") + "#$"
  const n = T.length

  const P = new Array(n).fill(0)
  let C = 0 // center of the rightmost palindrome
  let R = 0 // right boundary (exclusive-ish) of the rightmost palindrome

  for (let i = 1; i < n - 1; i++) {
    const mir = 2 * C - i

    if (i < R) {
      P[i] = Math.min(R - i, P[mir])
    }

    // Expand around i
    while (T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
      P[i]++
    }

    // Update center/right boundary if we expanded past R
    if (i + P[i] > R) {
      C = i
      R = i + P[i]
    }
  }

  // Find max radius
  let maxLen = 0
  let centerIndex = 0
  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i]
      centerIndex = i
    }
  }

  // Map back to original string indices
  const start = Math.floor((centerIndex - maxLen) / 2)
  return s.substring(start, start + maxLen)
}
