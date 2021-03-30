package com.cucumber.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfiurationReader {
	
	public static Properties p;
	
	public ConfiurationReader() throws IOException {
		File f = new File("C:\\Users\\GOKUL\\eclipse-workspace\\Cucumber_Project\\src\\test\\java\\com\\cucumber\\property\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}
	
	public static String browserLaunch() {
		
		String browser = p.getProperty("browsername");
		//System.out.println(browser);
		return browser;
	}
	
	public static String url() {

		String url = p.getProperty("url");
		//System.out.println(url);
		return url;
	}
	
	public static String username() {

		String username = p.getProperty("username");
		//System.out.println(username);
		return username;
	}
	
	public static String password() {

		String password = p.getProperty("password");
		//System.out.println(password);
		return password;
	}
	
	/*public static void main(String[] args) throws IOException {
		ConfiurationReader cr = new ConfiurationReader();
		cr.browserLaunch();
	}*/

}
