Feature: Booking a room in adactin Application


Scenario Outline: Login the application
 	Given User launch the application
 	When User enter "<username>" as username
    And User enter "<password>" as password
    Then User verify valid username and valid password
 		
 		
 		Examples:
 		| username | password |
 		| nishwanth | nish@22 |
 		| Dinesh29 | Dineshjun29 |
 		| gcool | 12345 |
 

Scenario: Login the application
    Given User launch the application
    When User enter "gokuleswar" as username
    And User enter "gokuleswar1995" as password
    Then User verify valid username and valid password
    
    

Scenario: Search the hotel
    Given User select a location in dropdown
    When User select a hotel
    And User select room type
    And User select number of rooms
    And User enter check in date
    And User enter check out date
    And User select number of adults per room
    And User select number of children per room
    Then User verify valid information given in the page
    
 Scenario: Select a hotel
     Given Select a hotel
     Then User confirming the hotel
     
 Scenario: Book a hotel
     Given User enters first name
     When User enters last name
     And User enters billing address
     And User enters credit card number
     And User provides credit card type
     And User provides expiry month of credit card
     And User provides expiry year of credit card
     And User enters cvv number
     Then User verify the valid credentials
     
