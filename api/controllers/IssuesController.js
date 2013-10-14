/**
 * IssuesController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  'index' : function(req, res) {

  	Issues.find().sort('issueNumber').done(function(err, issuesData){
  		if(!!err){
  			res.send("an error occured :" + err);
  		} else {
  			//res.render('404',{name: "Naman", title: "It’s a 404"});
  			res.send(issuesData);
        //res.send({"wantsJSON":req.wantsJSON});
  		}
  	})
  	
  } 

};
