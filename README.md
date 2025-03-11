# Achievable Coding Challenge

## Overview

This project is a coding challenge that requires updating the ```randomizeQuestion``` function in ```index.mjs``` to generate a unique version of the original question each time the "Randomize" button is clicked. The values for variables in the prompt, choices, answer, and explanation should all change dynamically.

## Task Details

The original question involved an event planner who orders ice sculptures for different corporate events. The problem needed to be randomized in terms of:
- The number of small and large sculptures ordered.
- The locations of the events.
- The type of events.
- The pricing of sculptures.
- The final cost calculations.
- The choices presented as multiple-choice answers.
- The explanation for the correct answer.

## Implementation Details

Updates made to ```randomizeQuestion```:

- **Randomized sculpture orders**: The number of small and large sculptures is generated using ```Math.random()``` within specific ranges.
- **Ensured unique event data**: A ```while``` loop ensures that two different events do not have identical orders.
- **Randomized sculpture prices**: Prices for small and large sculptures are randomly set within a predefined range.
- **Computed total event costs**: The cost for each event is calculated dynamically based on the random values.
- **Generated wrong answers**: A function generates plausible but incorrect answers, ensuring they are unique.
- **Randomized event locations and types**: Chosen randomly from predefined lists.
- **Constructed a detailed explanation**: The solution walkthrough dynamically updates based on random values.
- **Ensured correct multiple-choice formatting**: The correct answer is inserted randomly among the answer choices.

## How to Use

- Open the project in a browser.
- Click the **Randomize** button.
- A new version of the problem statement will be generated each time.
- The question, choices, answer, and explanation will all be dynamically updated.

## CodeSandbox Link

- You can view and test the project here: [CodeSandbox Fork](https://codesandbox.io/p/github/mhdamaan79/achievable-coding-challenge/main?file=%2Fsrc%2Findex.mjs)

## Challenges Faced & Solutions

- **Ensuring Uniqueness**: Preventing duplicate event data required careful logic in generating random values and checking for uniqueness.
- **Balancing Difficulty**: Incorrect answers had to be plausible yet distinct from the correct one, requiring a mix of randomness and constraints.
- **Formatting Issues**: Ensuring that the dynamically generated explanations were structured properly without breaking readability.

## Conclusion

This project successfully implements a randomized question generator that dynamically updates all aspects of the problem statement, ensuring a unique experience for each attempt. 
