# playwright-bdd-example

A minimal example project that uses [playwright-bdd](https://github.com/vitalets/playwright-bdd) to run BDD tests with Playwright.

To setup, run:
```
npm ci && npx playwright install
```

## Exercise

Implement a basic test using **playwright-bdd**.

### Examples
To help with the exercise, check the examples provided at:
- [PomClassExample](/features/steps/pom-class-example.ts), to see how steps are defined with decorators over class methods
- [fixtures.ts](/features/steps/fixtures.ts), to see how a class can be configured to *hold step implementations*
- [index.ts](/features/steps/index.ts), to see how steps can be implemented

### 1. Make `npx bddgen` pass
1. Configure the fixture class [PomClassExercise](/features/steps/pom-class-exercise.ts) on [fixtures.ts](/features/steps/fixtures.ts).
2. Define the step methods under that class

### 2. Make the test pass
You can run the tests in one of two ways:
- With the GUI window: `npm run watch`
- On the command line: `npx bddgen && npx playwright test -g "@exercise"`

