const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.google.com",
    projectId: "zoc9iw",
    "video":false, //video kaydının alınmasını engeller false yerine true yapılarak kayıt alınması saglanabillir
    "retire":2 // fail olan testlerin 2 kere daha çalışmasını sağlar
  },
});


