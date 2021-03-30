package com.cucumber.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucumber.helper.ConfiurationReader;
import com.cucumber.helper.FileReaderManager;
import com.cucumber.org.Cucumber_Project.BaseClass;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount=2)
@CucumberOptions(features = "src\\test\\java\\com\\cucumber\\feature",
				glue = {"com\\cucumber\\stepdefinition", "com\\cucumber\\helper"},
				monochrome = true,
				dryRun = false,
				strict = true,
				//tags = "@123"
				plugin = {"com.cucumber.listener.ExtentCucumberFormatter:extends/repo.html",
						"rerun:Reports1/FailedScenario.txt"}
						//"json:Report/Reports.json"
						//"pretty"
						//"html:Report.html"
				)

public class Runner {
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws IOException {
		String browserLaunch = FileReaderManager.getInstance().getCrInstance().browserLaunch();
		//String browserLaunch = ConfiurationReader.browserLaunch();
		driver = BaseClass.browserLaunch(browserLaunch);
	}
	
	@AfterClass
	public static void tearDown() throws InterruptedException {
		
		//Thread.sleep(30000);
		driver.quit();
	}

}
