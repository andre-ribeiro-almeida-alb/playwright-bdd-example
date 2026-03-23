import { test as base, createBdd } from 'playwright-bdd';
import { PomClass } from './pom';

type Fixtures = {
  // set types of your fixtures
  pomClass: PomClass
};

export const test = base.extend<Fixtures>({
  pomClass: ({ page }, use) => use(new PomClass(page)),
});

export const { Given, When, Then } = createBdd(test);
