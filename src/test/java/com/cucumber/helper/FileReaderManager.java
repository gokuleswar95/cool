package com.cucumber.helper;

import java.io.IOException;

public class FileReaderManager {
	
	private FileReaderManager() {

	}
	
	public static FileReaderManager getInstance() {

		FileReaderManager frm = new FileReaderManager();
		return frm;
	}
	
	public ConfiurationReader getCrInstance() throws IOException {
		ConfiurationReader cr = new ConfiurationReader();
		return cr;
	}

}
