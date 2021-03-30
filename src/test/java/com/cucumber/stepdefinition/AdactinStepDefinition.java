package com.cucumber.stepdefinition;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.ClickAction;

import com.cucumber.helper.FileReaderManager;
import com.cucumber.helper.PageObjectManager;
import com.cucumber.org.Cucumber_Project.BaseClass;
import com.cucumber.runner.Runner;
import com.pom.org.AdactinLogin;
import com.pom.org.BookHotel;
import com.pom.org.SearchHotel;
import com.pom.org.SelectHotel;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class AdactinStepDefinition extends BaseClass{
	
	public static WebDriver driver = Runner.driver;
	
	PageObjectManager pom = new PageObjectManager(driver);
	
	//AdactinLogin al = new AdactinLogin(driver);
	

	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {
		String url = FileReaderManager.getInstance().getCrInstance().url();
		get(url);
	}

	@When("^User enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {

		sendKeys(pom.getAl().getUsername(), arg1);
	}

	@When("^User enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {

		sendKeys(pom.getAl().getPassword(), arg1);
	}

	@Then("^User verify valid username and valid password$")
	public void user_verify_valid_username_and_valid_password() throws Throwable {

		elementClick(pom.getAl().getLogin());
	}
	
	
	//SearchHotel sh = new SearchHotel(driver);

	@Given("^User select a location in dropdown$")
	public void user_select_a_location_in_dropdown() throws Throwable {
		dropDown(pom.getSh().getLocation(), "value", "Melbourne");
	
	}

	@When("^User select a hotel$")
	public void user_select_a_hotel() throws Throwable {
		dropDown(pom.getSh().getHotels(), "value", "Hotel Sunshine");
	
	}

	@When("^User select room type$")
	public void user_select_room_type() throws Throwable {
		dropDown(pom.getSh().getRoom_type(), "value", "Super Deluxe");
	}

	@When("^User select number of rooms$")
	public void user_select_number_of_rooms() throws Throwable {
		dropDown(pom.getSh().getRoom_nos(), "value", "2");
	}

	@When("^User enter check in date$")
	public void user_enter_check_in_date() throws Throwable {
		elementClear(pom.getSh().getDatepick_in());
		sendKeys(pom.getSh().getDatepick_in(), "11/03/2021");
	}

	@When("^User enter check out date$")
	public void user_enter_check_out_date() throws Throwable {
		elementClear(pom.getSh().getDatepick_out());
		sendKeys(pom.getSh().getDatepick_out(), "12/03/2021");
	}

	@When("^User select number of adults per room$")
	public void user_select_number_of_adults_per_room() throws Throwable {
		dropDown(pom.getSh().getAdult_room(), "value", "2");
	}

	@When("^User select number of children per room$")
	public void user_select_number_of_children_per_room() throws Throwable {
		dropDown(pom.getSh().getChild_room(), "value", "0");
		//sleep(10000);
	}

	@Then("^User verify valid information given in the page$")
	public void user_verify_valid_information_given_in_the_page() throws Throwable {
		elementClick(pom.getSh().getSubmit());
	}
	
	//SelectHotel se = new SelectHotel(driver);
	
	@Given("^Select a hotel$")
	public void select_a_hotel() throws Throwable {

		elementClick(pom.getSe().getRadiobutton());
	}

	@Then("^User confirming the hotel$")
	public void user_confirming_the_hotel() throws Throwable {

		elementClick(pom.getSe().getContinu());
	}
	
	//BookHotel bh = new BookHotel(driver);
	
	@Given("^User enters first name$")
	public void user_enters_first_name() throws Throwable {

		sendKeys(pom.getBh().getFirstname(), "gokul");
	}

	@When("^User enters last name$")
	public void user_enters_last_name() throws Throwable {

		sendKeys(pom.getBh().getLastname(), "cool");
	}

	@When("^User enters billing address$")
	public void user_enters_billing_address() throws Throwable {

		sendKeys(pom.getBh().getAddress(), "India");
	}

	@When("^User enters credit card number$")
	public void user_enters_credit_card_number() throws Throwable {

		sendKeys(pom.getBh().getCc_num(), "3544758954126588");
	}

	@When("^User provides credit card type$")
	public void user_provides_credit_card_type() throws Throwable {

		dropDown(pom.getBh().getCc_type(), "visibletext", "VISA");
	}

	@When("^User provides expiry month of credit card$")
	public void user_provides_expiry_month_of_credit_card() throws Throwable {

		dropDown(pom.getBh().getCc_exp_month(), "value", "4");
	}

	@When("^User provides expiry year of credit card$")
	public void user_provides_expiry_year_of_credit_card() throws Throwable {

		dropDown(pom.getBh().getCc_exp_year(), "value", "2022");
	}

	@When("^User enters cvv number$")
	public void user_enters_cvv_number() throws Throwable {

		sendKeys(pom.getBh().getCc_cvv(), "957");
	}

	@Then("^User verify the valid credentials$")
	public void user_verify_the_valid_credentials() throws Throwable {

		elementClick(pom.getBh().getBook_now());
		Assert.assertEquals("ase", "sjs");
		//	Assert.assertEquals("asc", "scd");
	}
	
}
