$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kayak.feature");
formatter.feature({
  "line": 1,
  "name": "Kayak Search Page",
  "description": "",
  "id": "kayak-search-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user verify the pageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on arrivalBox and uncheck the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters  Search details \"\u003cArrival\u003e\" and \"\u003cDeparture\u003e\" and \"\u003cArrivalDate\u003e\" and \"\u003cDepartureDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks Search Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user select the search result",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_Kayak_Search_page()"
});
formatter.result({
  "duration": 6287566263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Flights, Hotels \u0026 Rental Cars | KAYAK",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefination.user_verify_the_pageTitle(String)"
});
formatter.result({
  "duration": 713682110,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.user_click_on_arrivalBox_and_uncheck_the_check_box()"
});
formatter.result({
  "duration": 34607734664,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-38O48P3\u0027, ip: \u0027192.168.254.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Nayana\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55897}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b59f362d99f4a5cd7dd3ebee9fa4cb2a\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@id,\u0027destination-airport\u0027)][@placeholder\u003d\u0027To?\u0027]\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.qa.util.TestUtil.waitForElement(TestUtil.java:16)\r\n\tat com.qa.pages.HomePage.arrivalForm(HomePage.java:91)\r\n\tat com.qa.stepDefination.HomePageStepDefination.user_click_on_arrivalBox_and_uncheck_the_check_box(HomePageStepDefination.java:51)\r\n\tat ✽.Then user click on arrivalBox and uncheck the check box(kayak.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cArrival\u003e",
      "offset": 29
    },
    {
      "val": "\u003cDeparture\u003e",
      "offset": 45
    },
    {
      "val": "\u003cArrivalDate\u003e",
      "offset": 63
    },
    {
      "val": "\u003cDepartureDate\u003e",
      "offset": 83
    }
  ],
  "location": "HomePageStepDefination.user_enters_Search_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.user_clicks_Search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.user_select_the_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});