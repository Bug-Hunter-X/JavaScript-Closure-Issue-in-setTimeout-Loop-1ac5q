# JavaScript Closure Issue in setTimeout Loop

This repository demonstrates a common JavaScript closure issue related to the use of `setTimeout` within a loop.  The problem arises because the callback function within `setTimeout` doesn't immediately execute. By the time it does execute, the loop has already completed, and 'i' holds its final value.

The `bug.js` file contains the buggy code. The `bugSolution.js` demonstrates how to correctly capture the value of `i` using an immediately invoked function expression (IIFE) or `let` within the loop. 