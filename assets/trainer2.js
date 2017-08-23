var PREDICTION_THRESHOLD = 0.98;

var natural = require('natural');
var fs = require('fs');
var tickets = JSON.parse(fs.readFileSync('tickets.json', 'utf-8'));
//console.log(tickets);

//tickets = $.get('tickets.json');

//Set up classifiers
var teamClassifier = new natural.LogisticRegressionClassifier();
var rankClassifier = new natural.LogisticRegressionClassifier();

var correct = 0;
var unsure = 0;
var closeEnough = 0;
var incorrect = 0;

tickets.tickets.forEach( function(ticket) {
	
	
	
	//console.log(ticket);
	
	//console.log(ticket.subject);
	//console.log(ticket.subject);
	
	//console.log(ticket.subject);
	ticket.url = getFieldValue(ticket.fields, 54375168); 	//relevant url
	ticket.team = getFieldValue(ticket.fields, 52068907);	//team
	if (ticket.team == 'team__site_launch_us' || ticket.team == 'team__site_launch_international') {
		ticket.team = 'team__site_launch';
	}

	ticket.rank = getFieldValue(ticket.fields, 44261068);	//rank
	//console.log(' ');
	
	
	//ticket.url = url;
	
	var a = ticket.subject + ', ' + ticket.description  + ', ' + ticket.priority + 'priority, ' + ticket.url;
	
	//train('team', a, team);
	
	predict(a, 'team', ticket);
	//predict('rank', a);
	

	
});




function getFieldValue(fields, key) {
	var v = '';
	fields.forEach( function(field) {
		//console.log(field.id);
		//console.log(field.id == key);
		if (field.id == key) {
			v = field.value;
		}
	});
	return v;
}

function predict(string, classifierType, ticket) {
	var output = {};
	
	natural.LogisticRegressionClassifier.load('classifiers/' + classifierType + 'Classifier.json', null, function(err, classy) {
			
		//console.log(classy.getClassifications(ticket.subject + ' ' + ticket.description + ', ' + ticket.priority + 'priority'));
		//console.log('test');
		var classification = classy.getClassifications(string)[0];
		
		//var output = {};
		output.type = classifierType;
		output.classification = classification;			

		if(classification.value > PREDICTION_THRESHOLD){
			output.pass = true;
			//correct++;
		} else {
			output.pass = false;
			//incorrect++;
		} 
		
		
		
		if ((ticket.team == 'team__banners_layouts' && output.classification.label == 'team__composer') ||
			(ticket.team == 'team__media' && output.classification.label == 'team__design') ||
			(ticket.team == 'team__page_manager' && output.classification.label == 'team__composer') ||
			(ticket.team == 'team__student_information_systems' && output.classification.label == 'team__constituents') ||
			(ticket.team == 'team__design_enotify' && output.classification.label == 'team__design') ||
			(ticket.team == 'team__design_enotify' && output.classification.label == 'team__enotify')) { output.closeEnough = true; }
		

		if (!output.pass) {
			unsure++;
		} else if (ticket.team == output.classification.label) {
			correct++;
		} else if (output.closeEnough) { 
			closeEnough++;
		} else {
			incorrect++;
		}
	
		if (ticket.team == output.classification.label) { var match = true; } else { var match = false; }
	
		//if (ticket.id == 8682741) {
		console.log(ticket.id + ': ' + ticket.subject);
		if (!output.pass) { console.log('UNSURE'); }
		if (ticket.team != output.classification.label) {console.log(ticket.team);}
		console.log(output.classification.label + ' | ' + output.classification.value.toFixed(4));
		console.log( correct + ' | ' + closeEnough + ' | ' + unsure + ' | ' + incorrect);

		console.log(' ');
		//}
		
		//console.log(output);

		fileData = ticket.id +','+ ticket.team +','+ output.classification.label + ',' + match +  ',' + output.classification.value.toFixed(4) +','+ output.pass +','+ output.closeEnough + ',https://finalsite.zendesk.com/agent/tickets/'+ ticket.id + '\n';
		
		//fs.open('output.csv', function (e) {
			
		//fs.appendFileSync("output.csv", fileData);
		
		//});
		return output;

		
	});
	
	//console.log(output);
}

/*
function train(classifierType, trainText, trainVal) {
	natural.LogisticRegressionClassifier.load('classifiers/' + classifierType + 'Classifier.json', null, function(err, classy) {
		
		
		if (typeof classy == 'undefined'){
			var classy = new natural.LogisticRegressionClassifier();
		}
		
		classy.addDocument(trainText, trainVal);
		classy.train();
		classy.save('classifiers/' + classifierType + 'Classifier.json', function(err, classy){
			console.log('Saving new ' + classifierType + ' classifier...');
		});
		//console.log(err);
		*/
		/*
		classy.addDocument(ticket.subject + ', ' + ticket.description, value);
		classy.train();
		classy.save('classifiers/' + classifierType + 'Classifier.json', function(err, classy){
			console.log('Saving the ' + classifierType + ' classifier...');
		});
		response.write('Success');
		response.end();
		*/
		/*
	});
}
*/