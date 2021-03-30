package com.cucumber.runner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount=2)
@CucumberOptions(features = "Reports1/FailedScenario.txt",
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

public class TestRunner {
	
	

}
