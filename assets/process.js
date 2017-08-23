var natural = require('natural');
var http = require("http");
var url = require('url');

//var subject = "facebook twitter feeds";
//var description = "On our Alumnae Portal we have are setting up a twitter and facebook feed, We added the element for FB and Twitter but they are not working correctly. They just list the URL for each account. Can I get help in getting them set up correctly? We need to get this done by Monday";
//var urgency = '';

teamClassifier = new natural.BayesClassifier();
rankClassifier = new natural.BayesClassifier();


/*
teamClassifier.events.on('trainedWithDocument', function (obj) {
   //console.log(obj);
});
*/



var app = http.createServer(function(request, response) {
	var headers = request.headers;
	var method = request.method;
	//var url = request.url;
	var url_parts = url.parse(request.url, true);
	var ticket = url_parts.query;
	var body = [];
	request.on('error', function(err) {
		console.error(err);
	}).on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
		// At this point, we have the headers, method, url and body, and can now
		// do whatever we need to in order to respond to this request.
			
		if (typeof ticket.team !== 'undefined') {
			trainTeamClassifier(ticket.subject, ticket.description, ticket.team);
		}
	
		var team = processTeam(ticket.subject, ticket.description);
		var rank = processRank(ticket.subject, ticket.description);
	
		var output = { 'team': team, 'rank': rank };

		response.setHeader('Content-Type', 'application/json');
		response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4567');
		response.write(JSON.stringify(output));
		response.end();
		
		//console.log('done');
	});
});

//Activates this server, listening on port 8080.
app.listen(8081); 

/*
process.on('SIGINT', function () {
  app.close(function () {
    console.log('Exiting...');
	teamClassifier.save('classifiers/teamClassifier.json', function(err, teamClassifier){ 
		console.log('ERROR!');
		console.log(err)	;
	});
	//rankClassifier.save('classifiers/rankClassifier.json', function(err, classifier){});

	process.exit(0);
  });
});
*/

console.log('Server running at http://127.0.0.1:8081/');


function processTeam(subject, description) {
	
	
	var teamVal = '-';
	teamVal = natural.BayesClassifier.load('classifiers/teamClassifier.json', null, function(err, teamClassifier){ 
		console.log(subject);
		console.log(teamClassifier.getClassifications(subject + ' ' + description));
		console.log(teamClassifier.classify(subject + ' ' + description));
		return teamClassifier.classify(subject + ' ' + description);
		
	});
	console.log(teamVal);
	return teamVal;
	//return teamClassifier.classify(subject + ' ' + description);
}

function processRank(subject, description) {
	
	var rankVal = '-';
	
	rankVal = natural.BayesClassifier.load('classifiers/rankClassifier.json', null, function(err, rankClassifier){ 
		//console.log('Loading Team Classifier');
		//console.log(err);
		console.log(subject);
		console.log(rankClassifier.getClassifications(subject + ' ' + description));
		return rankClassifier.classify(subject + ' ' + description);
		
	});
	
	return rankVal;

}

/*
function trainTeamClassifier(subject, description, team) {
	teamClassifier.addDocument(subject + ' ' + description, team);
	teamClassifier.train();
}
*/

