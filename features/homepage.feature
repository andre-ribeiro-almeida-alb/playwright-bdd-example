Feature: Optional texts

  Scenario: Decorator steps
    Given This basic pom step
    Then This step with suppressed text should pass null value to the argument
    Then This step with no suppressed text should pass defined value to the argument
    And The comparison 1 > 2 is not correct
    And The comparison 2 > 1 is correct
