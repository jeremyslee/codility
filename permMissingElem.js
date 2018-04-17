/*
A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

function solution(A) {
  let len = A.length;
  
  if (len === 0) return 1;
  
  let sorted = A.sort((a, b) => a - b);
  if (sorted[0] !== 1) return 1;
  if (sorted[len - 1] !== len + 1) return len + 1
  
  for (let i = 0; i < len - 1; i++) {
      if ((sorted[i + 1] - sorted[i]) > 1) return sorted[i] + 1;
  }
}