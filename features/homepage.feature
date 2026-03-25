Feature: Playwright Home Page

  Scenario: Check title
    Given I am on Playwright home page
    When I click link "Get started"
    Then I see in title "Installation"

  Scenario: Basic Decorator Test
    Given A basic step

  Scenario: Unimplemented decorator test
    Given I am logged in TSTs env
    When I open the projects module
    And I search project with name "Placeholder"
    Then I validate I see the project with a simple expect
