Feature: Playwright Home Page

  Scenario: Check title
    Given I am on Playwright home page
    When I click link "Get started"
    Then I see in title "Installation"
    And This step should be matched with slash
    And This step should be matched with quote "some quote" with slash
    And This step should be matched with quote "some quote" without slash
    And This step should be matched with unquoted word potato with slash
