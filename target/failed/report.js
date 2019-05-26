$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/AddTarPlan.feature");
formatter.feature({
  "name": "To Add tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@reg1"
    }
  ]
});
formatter.scenario({
  "name": "To test add tariff plan messages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@reg1"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
});