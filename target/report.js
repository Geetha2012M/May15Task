$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/AddTarPlan.feature");
formatter.feature({
  "name": "To Add tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test add tariff plan messages",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is in an telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffMap.the_user_is_in_an_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffMap.the_user_click_the_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the datas",
  "rows": [
    {
      "cells": [
        "monthy rental",
        "Free loc min",
        "Free Intern min",
        "Free sms",
        "local per min",
        "Intern per min",
        "sms per charges"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "501",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "101",
        "201",
        "301",
        "401",
        "502",
        "601",
        "701"
      ]
    },
    {
      "cells": [
        "102",
        "202",
        "302",
        "402",
        "503",
        "602",
        "702"
      ]
    },
    {
      "cells": [
        "103",
        "203",
        "303",
        "403",
        "504",
        "603",
        "703"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffMap.the_user_is_filling_all_the_datas(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffMap.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you add Tariff Plan messages",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffMap.the_user_should_see_the_Congratulation_you_add_Tariff_Plan_messages()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/AddTrafScenario.feature");
formatter.feature({
  "name": "To add the tariff Plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the add tariff plan messages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in an telecom website",
  "keyword": "Given "
});
formatter.step({
  "name": "The user click on add the tariff plan",
  "keyword": "And "
});
formatter.step({
  "name": "The user is filling all the data\"\u003cmonthlyrental\u003e\",\"\u003cfreelocalmin\u003e\",\"\u003cfreeinternataionalmin\u003e\",\"\u003cfreesmspack\u003e\",\"\u003clocalperminschrge\u003e\",\"\u003cinternatinalpermin\u003e\",\"\u003csmscharge\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click the submit Button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the Congratulation you Add Tariff Plan message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "monthlyrental",
        "freelocalmin",
        "freeinternataionalmin",
        "freesmspack",
        "localperminschrge",
        "internatinalpermin",
        "smscharge"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "504",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "102",
        "205",
        "301",
        "405",
        "506",
        "601",
        "704"
      ]
    },
    {
      "cells": [
        "101",
        "204",
        "305",
        "409",
        "508",
        "608",
        "709"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the add tariff plan messages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in an telecom website",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_in_an_telecom_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add the tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_on_add_the_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the data\"100\",\"200\",\"300\",\"400\",\"504\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_filling_all_the_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_the_submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you Add Tariff Plan message",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_should_see_the_Congratulation_you_Add_Tariff_Plan_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the add tariff plan messages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in an telecom website",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_in_an_telecom_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add the tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_on_add_the_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the data\"102\",\"205\",\"301\",\"405\",\"506\",\"601\",\"704\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_filling_all_the_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_the_submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you Add Tariff Plan message",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_should_see_the_Congratulation_you_Add_Tariff_Plan_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the add tariff plan messages",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in an telecom website",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_in_an_telecom_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add the tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_on_add_the_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the data\"101\",\"204\",\"305\",\"409\",\"508\",\"608\",\"709\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_is_filling_all_the_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_click_the_submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you Add Tariff Plan message",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineTask.the_user_should_see_the_Congratulation_you_Add_Tariff_Plan_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/AddTrafstep.feature");
formatter.feature({
  "name": "Add tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test add tariff plan message",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is in an telecom Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_in_telecom_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_click_on_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the field",
  "rows": [
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "501",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "101",
        "201",
        "301",
        "401",
        "502",
        "601",
        "701"
      ]
    },
    {
      "cells": [
        "102",
        "202",
        "302",
        "402",
        "503",
        "602",
        "702"
      ]
    },
    {
      "cells": [
        "103",
        "203",
        "303",
        "403",
        "504",
        "603",
        "703"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffplan.the_user_is_filling_all_the_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffplan.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the Congratulation you add Tariff Plan message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffplan.the_user_should_see_the_Congratulation_you_add_Tariff_Plan_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/feature/cucumber00.feature");
formatter.feature({
  "name": "Add Customer feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is in telecom Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.the_user_is_in_telecom_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.the_user_is_filling_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.the_user_should_see_the_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
});