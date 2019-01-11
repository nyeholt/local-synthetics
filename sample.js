const { $driver, $browser } = require('./synthetics');
var assert = require('assert');


// INSERT TEST

var now = new Date();

$browser.get('https://www.symbiote.com.au/?src=newrelic&t=' + (now.getTime() / 1000)).then(function(){
  // Check the H1 title matches "Example Domain"
  $browser.findElement($driver.By.css('p.headline')).then(function(element){
    return element.getText().then(function(text){
      assert.equal('Engineer the web, together.', text, 'Headline text not correct');
    });
  });
  
  console.log("Done!");
  return;
});
