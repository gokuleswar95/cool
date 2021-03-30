package com.cucumber.helper;

import org.openqa.selenium.WebDriver;

import com.pom.org.AdactinLogin;
import com.pom.org.AdactinLogout;
import com.pom.org.BookHotel;
import com.pom.org.SearchHotel;
import com.pom.org.SelectHotel;

public class PageObjectManager {
	
	public static WebDriver driver;
	
	private AdactinLogin al;
	private BookHotel bh;
	private SearchHotel sh;
	private SelectHotel se;
	private AdactinLogout lg;
	
	
	public PageObjectManager(WebDriver driver2) {
		this.driver=driver2;
	}
	public AdactinLogin getAl() {
		al=new AdactinLogin(driver);
		return al;
	}
	public BookHotel getBh() {
		bh = new BookHotel(driver);
		return bh;
	}
	public SearchHotel getSh() {
		sh = new SearchHotel(driver);
		return sh;
	}
	public SelectHotel getSe() {
		se = new SelectHotel(driver);
		return se;
	}
	public AdactinLogout getLg() {
		lg = new AdactinLogout(driver);
		return lg;
	}
	

}
