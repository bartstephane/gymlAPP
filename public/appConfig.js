window.kursausschreibung = window.kursausschreibung || {};
window.kursausschreibung.appConfig = {
  // the token type
  "tokenType": "urn:ietf:params:oauth:token-type:jwt-bearer",
  // API base URL without trailing slash
  "apiUrl": "https://evento-test.erz.be.ch",
  // base Url of the web application without trailing slash (also the redirect url for public clients)
  //"webBaseUrl": "https://www.stefbart.ch",
  // base url of the CLX.Evento OAuth Server.
  "oauthUrl": "https://evento-test.erz.be.ch/OAuth",
  // the instance id for this application.
  "instanceId": "GymBiel",
  // the client id for this application.
  "clientId": "GymB",
  // the secret code for this client
  "clientSecret": "sert42SFdaetTsgh76",
  // set this to true if you want to use autologin on your page. If "false" the authorization must be done by the application, that module does not perform authorization. If false and no token found in the local storage (CLX.LoginToken) the "kursausschreibung" application only refresh the actual url. The application must be redirect user to login form.
  "useAutoLogin": true,
  // the scope of the application
  "applicationScope": "NG"
};