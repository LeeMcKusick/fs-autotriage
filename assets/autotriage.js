var natural = require('natural');
//var Zendesk = require('zendesk-node-api'); 
var http = require("http");
var url = require('url');
var qs = require('querystring');

var PREDICTION_THRESHOLD = 0.4;

//teamClassifier = new natural.LogisticRegressionClassifier();
//rankClassifier = new natural.LogisticRegressionClassifier();

var team = '---';
var rank = '---';

/*
var zendesk = new Zendesk({
	url: 'http://finalsite.zendesk.com',
	email: 'lee.mckusick@gmail.com',
	token: ''
});
*/

http.createServer(function(request, response) {
	
	var headers = request.headers;
	//var method = request.method;
	//var url = request.url;
	//var url_parts = url.parse(request.url, true);
	//var ticket = url_parts.query;
	//var method = ticket.method;
	var body = [];
	request.on('error', function(err) {
		console.error(err);
	}).on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();
		
		//console.log(request.body);
		console.log(body);
		var ticket = qs.parse(body);
		var method = ticket.method;
		//console.log(ticket);
		
		
		//console.log(body);
		//var test1 = url.parse(body, true);
		//console.log(test1);
		response.setHeader('Content-Type', 'application/json');
		response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4567');

		switch(method) {
			case 'predictTeam':
				predict(ticket, 'team', response);
				break;			
			case 'predictRank':
				predict(ticket, 'rank', response);
				break;
			case 'trainteam':
				team = ticket.value;
				train(ticket, team, 'team', response);
				break;
			case 'trainrank':
				rank = ticket.value;
				train(ticket, rank, 'rank', response);
				break;
			default:
				predict(ticket, 'team', response);
		}
		
	
	});
}).listen(8081);

console.log('Running...');



function train(ticket, value, classifierType, response) {
	natural.LogisticRegressionClassifier.load('classifiers/' + classifierType + 'Classifier.json', null, function(err, classy) {
		classy.addDocument(ticket.subject + ', ' + ticket.description, value);
		classy.train();
		classy.save('classifiers/' + classifierType + 'Classifier.json', function(err, classy){
			console.log('Saving the ' + classifierType + ' classifier...');
		});
		response.write('Success');
		response.end();
	});
}

function predict(ticket, classifierType, response) {
	natural.LogisticRegressionClassifier.load('classifiers/' + classifierType + 'Classifier.json', null, function(err, classy) {
			
		//console.log(classy.getClassifications(ticket.subject + ' ' + ticket.description + ', ' + ticket.priority + 'priority'));
		
		var classification = classy.getClassifications(ticket.subject + ', ' + ticket.description + ', ' + ticket.priority + 'priority')[0];
		
		var output = {};
		output.type = classifierType;
		classification.value = classification.value.toFixed(5);
		output.classification = classification;			

		if(classification.value > PREDICTION_THRESHOLD){
			output.pass = true;
		} else {
			output.pass = false;
		} 
		
	console.log(output);

		response.write(JSON.stringify(output));
		response.end()
	});
}