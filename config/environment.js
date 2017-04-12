module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',  # This will differ depending on what you named YOUR app.
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyDfaw0n73J8DwAQzFTelpPDr9yBDgy-M6M",
      authDomain: "super-rentals-b23c2.firebaseapp.com",
      databaseURL: "https://super-rentals-b23c2.firebaseio.com",
      storageBucket: "super-rentals-b23c2.appspot.com"
    },

    APP: {
    ...
...
