/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Assume that:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

// solution 1:

function solution(A, B, K) {
  let result = 0;
  
  if (A % K === 0) result++;
  else if ((K - (A % K)) <= (B - A) % K) result++;
  
  result += Math.floor((B - A) / K);
  return result;
}

// solution 2:

// The number of multiples of K in [A, B] is floor((B - A) / K)
// A = a + mK, where a = A % K and mk = largest multiple of K less than equal to A
// A = A % K + mK, A - A % K = mK
// 

function solution(A, B, K) {
  if (A % K === 0) return Math.floor((B - A) / K) + 1;
  else return Math.floor((B - (A - A % K)) / K);
}

// solution 2 refactored:

function solution(A, B, K) {
  return Math.floor((B - (A - A % K)) / K) + (A % K === 0 ? 1 : 0);
}
