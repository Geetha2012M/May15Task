package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature/AddTarPlan.feature",glue="com.stepdefinition",
              plugin="html:target/failed")

public class TestRerunner {

}
