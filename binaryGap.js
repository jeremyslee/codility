/*
Task description
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

// solution 1

function solution(N) {
  let binary = N.toString(2);
  
  // how many 1's there are
  let numOfOnes = binary.match(/1/g).length;
  
  // edge cases
  if (binary.length < 3) return 0;
  if (binary.indexOf('0') === -1) return 0;
  if (numOfOnes < 2) return 0;
  
  let countingGap = 0;
  let biggestGap = 0;
  
  // loop through the binary string starting with i = 1
  numOfOnes -= 1;
  for (let i = 1; i < binary.length; i++) {
      if (binary[i] === '0') {
          countingGap += 1;
      } else {
          if (countingGap > biggestGap) biggestGap = countingGap;
          countingGap = 0;
          // if there is no more 1's left, exit the loop right away
          if (--numOfOnes === 0) return biggestGap;
      }
  }
  return biggestGap;
}