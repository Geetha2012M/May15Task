package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	static WebDriver driver;
	@Before
	
	public void beforeclass() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Administrator\\eclipse-workspace\\geethu\\cucumber00\\driver\\chromedriver.exe");
		driver=new ChromeDriver();

	}
	@After
	
	public void afterclass() {
		driver.close();
		driver.quit();

	}
	
		
	

}
