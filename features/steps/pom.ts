import { expect, Page } from "@playwright/test";
import { Fixture, Given, Then } from 'playwright-bdd/decorators';

export @Fixture("pomClass") class PomClass {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    @Given("This basic pom step")
    public async basicStep() {
        await this.page.waitForTimeout(100);
    }

    @Then(/This step with( no)? suppressed text should pass (null|defined) value to the argument/)
    public async stepWithOptionalText(not: unknown, expectedValue: string) {
        expect(not).toBeDefined();
        if (expectedValue === "null") {
            expect(not).toBeNull();
        } else {
            expect(not).toBe(" no");
        }
    }

    @Then(/The comparison (\d+) > (\d+) is( not)? correct/)
    public async sumVerificationStep(number1: number, number2: number, invert: string | null) {
        if (invert === null) {
            expect(number1).toBeGreaterThan(number2);
        } else {
            expect(number1).not.toBeGreaterThan(number2);
        }
    }

}