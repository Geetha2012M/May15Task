

Feature: To Add tariff plan
  I want to use this template for my feature file

  
  Scenario: To test add tariff plan messages
    Given The user is in an telecom page
    And The user click the add tariff plan
    When The user is filling all the datas
    |monthy rental|300|
    |Free loc min|400|
    |Free Intern min|200|
    |Free sms|150|
    |local per min|100|
    |Intern per min|500|
    |sms per charges|600|
    And The user click the submit button
    Then The user should see the Congratulation you add Tariff Plan messages

  
