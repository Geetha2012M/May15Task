package com.stepdefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariffMap {

	// one dimensional Map
	static WebDriver driver;

	@Given("The user is in an telecom page")
	public void the_user_is_in_an_telecom_page() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Administrator\\eclipse-workspace\\geethu\\cucumber00\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/");

	}

	@Given("The user click the add tariff plan")
	public void the_user_click_the_add_tariff_plan() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();

	}

	@When("The user is filling all the datas")
	public void the_user_is_filling_all_the_datas(DataTable Custdetails) {

		Map<String, String> custdeta = Custdetails.asMap(String.class, String.class);

		driver.findElement(By.id("rental1")).sendKeys(custdeta.get("monthy rental"));

		driver.findElement(By.id("local_minutes")).sendKeys(custdeta.get("Free loc min"));

		driver.findElement(By.id("inter_minutes")).sendKeys(custdeta.get("Free Intern min"));

		driver.findElement(By.id("sms_pack")).sendKeys(custdeta.get("Free sms"));

		driver.findElement(By.id("minutes_charges")).sendKeys(custdeta.get("local per min"));

		driver.findElement(By.id("inter_charges")).sendKeys(custdeta.get("Intern per min"));

		driver.findElement(By.id("sms_charges")).sendKeys(custdeta.get("sms per charges"));

	}

	@When("The user click the submit button")
	public void the_user_click_the_submit_button() throws Exception {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@type='submit']")).click();

	}

	@Then("The user should see the Congratulation you add Tariff Plan messages")
	public void the_user_should_see_the_Congratulation_you_add_Tariff_Plan_messages() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	}

} 
