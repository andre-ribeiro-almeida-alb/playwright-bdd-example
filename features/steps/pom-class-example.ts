import { Page } from "@playwright/test";
import { Fixture, Given } from "playwright-bdd/decorators";

// Example fixture class
// -------- Implement the steps on `PomClassExercise` ----------
export default @Fixture("pomClassExample") class PomClassExample {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    @Given("A basic step")
    public async basicStep() {
        await this.page.waitForTimeout(100);
    }
}