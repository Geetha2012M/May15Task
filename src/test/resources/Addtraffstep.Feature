
Feature: Add tariff plan
  I want to use this template for my feature file

 
  Scenario: To test add tariff plan message
    Given The user is in an telecom Homepage
    And The user click on add tariff plan
    When The user is filling all the field
    |100|200|300|400|500|600|700|
    And The user clicks submit button
    Then The user should see the Congratulation you add Tariff Plan message
    

 