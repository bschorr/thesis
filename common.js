var tsession = require("temboo/core/temboosession");
var common = {
  consumerKey: "1382313795350849",
  consumerSecret: "cd00a356a23e33d450a6ecfb132dcf24",
  userAccount:"dayvson", 
  appName:"bernardo", 
  appKey:"WtddVEUyEpWPZgCXJ7v6",
  addCredentialsToInput: function(input, currentUser){
    input.set_AccessToken(currentUser.accessToken);
    input.set_AccessTokenSecret(currentUser.accessTokenSecret);
    input.set_ConsumerSecret(common.consumerSecret);
    input.set_ConsumerKey(common.consumerKey);
    return input;
  }
};
common.cache = require("memory-cache");
common.session = new tsession.TembooSession(common.userAccount, common.appName, common.appKey);
module.exports = common;
