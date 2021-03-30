package com.cucumber.helper;

import java.io.IOException;

import com.cucumber.org.Cucumber_Project.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.*;

public class Hooks extends BaseClass{

	@Before
	public void test() {

		System.out.println("gokul");
	}
	
	@After
	public void test1(Scenario scenario) throws IOException {
		System.out.println(scenario.getStatus());
		if (scenario.isFailed()) {
			screenshot("error2");
		}
		//
	}
}
