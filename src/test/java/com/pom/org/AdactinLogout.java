package com.pom.org;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinLogout {
	
	public static WebDriver driver;
	
	@FindBy(id="my_itinerary")
	private WebElement reciew;
	
	@FindBy(id="logout")
	private WebElement logout;
	
	

	public AdactinLogout(WebDriver ldriver) {

		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getReciew() {
		return reciew;
	}

	public WebElement getLogout() {
		return logout;
	}

}
