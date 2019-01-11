
const $driver = require('selenium-webdriver');

exports.$driver = $driver;
exports.$browser = new $driver
    .Builder()
    .forBrowser('chrome')
    .usingServer('http://selenium:4444/wd/hub')
    .build();
