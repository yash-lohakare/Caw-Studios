// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',


  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',

// reporter: [['junit', { outputFile: 'results.xml' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  
    browserName:'chromium',
    headless :false,
    // channel:'msedge',
    workers : 1,
    trace: 'on',
    // // trace: 'retain-on-failure',
    screenshot : 'on',
    video:'on',
    viewport : null
    // screenshot: 'only-on-failure'
    // ...devices["Pixel 2 XL"]
  },
  // projects:[
  //   {
  //     name:'Chrome',
  //     use :{
  //       browserName : "firefox",
  //       headless: false
  //     }
  //   }
  // ]

};

module.exports = config;
