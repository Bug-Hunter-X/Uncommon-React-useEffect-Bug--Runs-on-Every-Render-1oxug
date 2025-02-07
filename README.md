# Uncommon React useEffect Bug: Runs on Every Render

This repository demonstrates a common yet subtle bug in React's `useEffect` hook. The effect runs on every render, potentially leading to performance issues and unexpected behavior.  The solution demonstrates how to correctly use the dependency array to optimize the effect's execution.

## Bug
The `useEffect` hook in `bug.js` lacks proper dependency management. This causes the effect to run on every render, flooding the console and potentially impacting performance.  This is subtle and might not be immediately apparent.

## Solution
The solution in `bugSolution.js` demonstrates the correct way to handle dependencies. The effect is triggered only when the `count` state variable changes. This avoids unnecessary re-renders and optimizes performance.