module.exports = function(app){
  var common = require(__dirname + "/common");
  var Facebook = require("temboo/Library/Facebook/Reading");
  var feed = new Facebook.NewsFeed(common.session);
  var input = feed.newInputSet();
  var async = require("async");
  var request = require("request");
  var _getData = function(success, error){
    if(common.cache.get("currentUser") == null) error("No user found on cache");
    common.addCredentialsToInput(input, common.cache.get("currentUser"));
    feed.execute(
        input,
        function(results){
          var json = JSON.parse(results.get_Response());
          console.log(json);
          success(json.summary);
        },
        function(err){
          error(err.message);
        }
    );
  };
   var renderData = function(req, res, next){
    var _date;
    if(common.cache.get("currentUser") == null){
      res.redirect("/index");
      return;
    }
    _getData(function(data){
      console.log(data);
      res.send(data);
    }, function(error){
      res.send("ERROR: Could not retreive data");
    });
    
  }
  app.get("/feed/view", renderData);
};