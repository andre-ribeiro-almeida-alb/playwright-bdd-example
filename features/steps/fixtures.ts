import { test as base, createBdd } from 'playwright-bdd';
import PomClassExample from './pom-class-example';

type Fixtures = {
  // set types of your fixtures
  pomClassExample: PomClassExample
};

export const test = base.extend<Fixtures>({
  // add your fixtures
  pomClassExample: ({ page }, use) => use(new PomClassExample(page)),
});

export const { Given, When, Then } = createBdd(test);
