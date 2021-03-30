$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Precondition.feature");
formatter.feature({
  "line": 1,
  "name": "Booking a room in adactin Application",
  "description": "",
  "id": "booking-a-room-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login the application",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "booking-a-room-in-adactin-application;login-the-application;;1"
    },
    {
      "cells": [
        "gokuleswar",
        "gokuleswar1995"
      ],
      "line": 12,
      "id": "booking-a-room-in-adactin-application;login-the-application;;2"
    },
    {
      "cells": [
        "gokul",
        "gokul1995"
      ],
      "line": 13,
      "id": "booking-a-room-in-adactin-application;login-the-application;;3"
    },
    {
      "cells": [
        "coolgo",
        "5544djdjd"
      ],
      "line": 14,
      "id": "booking-a-room-in-adactin-application;login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login the application",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"gokuleswar\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"gokuleswar1995\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 3858230200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokuleswar",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 197152700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokuleswar1995",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 114228600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 893756800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login the application",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"gokul\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"gokul1995\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 485510900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokul",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 222595500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokul1995",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 161788100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 504209500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login the application",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"coolgo\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"5544djdjd\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 450022400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coolgo",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 172024000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5544djdjd",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 100575500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 530629800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login the application",
  "description": "",
  "id": "booking-a-room-in-adactin-application;login-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enter \"gokuleswar\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"gokuleswar1995\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verify valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 438722300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokuleswar",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 127269300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gokuleswar1995",
      "offset": 12
    }
  ],
  "location": "AdactinStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 102472600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 632306700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the hotel",
  "description": "",
  "id": "booking-a-room-in-adactin-application;search-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User select a location in dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User select a hotel",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User select room type",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enter check in date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter check out date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select number of adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select number of children per room",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify valid information given in the page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_a_location_in_dropdown()"
});
formatter.result({
  "duration": 158127000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_a_hotel()"
});
formatter.result({
  "duration": 143980200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_room_type()"
});
formatter.result({
  "duration": 129916400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_number_of_rooms()"
});
formatter.result({
  "duration": 141189000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_check_in_date()"
});
formatter.result({
  "duration": 179280500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_check_out_date()"
});
formatter.result({
  "duration": 159230700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_number_of_adults_per_room()"
});
formatter.result({
  "duration": 111870900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_number_of_children_per_room()"
});
formatter.result({
  "duration": 10095465200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_valid_information_given_in_the_page()"
});
formatter.result({
  "duration": 866056400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Select a hotel",
  "description": "",
  "id": "booking-a-room-in-adactin-application;select-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Select a hotel",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User confirming the hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.select_a_hotel()"
});
formatter.result({
  "duration": 81525500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_confirming_the_hotel()"
});
formatter.result({
  "duration": 755065900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Book a hotel",
  "description": "",
  "id": "booking-a-room-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User enters first name",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User enters last name",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enters billing address",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enters credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User provides credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User provides expiry month of credit card",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User provides expiry year of credit card",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User enters cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User verify the valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_first_name()"
});
formatter.result({
  "duration": 236709000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_last_name()"
});
formatter.result({
  "duration": 133023300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_billing_address()"
});
formatter.result({
  "duration": 95696300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_credit_card_number()"
});
formatter.result({
  "duration": 111613000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_provides_credit_card_type()"
});
formatter.result({
  "duration": 132014200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_provides_expiry_month_of_credit_card()"
});
formatter.result({
  "duration": 131853800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_provides_expiry_year_of_credit_card()"
});
formatter.result({
  "duration": 121148200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enters_cvv_number()"
});
formatter.result({
  "duration": 88614700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_verify_the_valid_credentials()"
});
formatter.result({
  "duration": 71773700,
  "status": "passed"
});
});