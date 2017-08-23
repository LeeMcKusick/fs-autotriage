var tickets = {"tickets":[{"url":"https://finalsite.zendesk.com/api/v2/tickets/8680787.json","id":8680787,"external_id":null,"via":{"channel":"web","source":{"from":{},"to":{},"rel":null}},"created_at":"2017-03-17T17:05:07Z","updated_at":"2017-03-17T17:43:40Z","type":"task","subject":"Credit card CSV not required","raw_subject":"Credit card CSV not required","description":"We are testing our giving form (https://www.taftschool.org/giving/make-a-gift-clone). I noticed that I was able to submit a credit card payment even though I left the CSV field blank. According to this support page (https://www.finalsitesupport.com/hc/en-us/articles/115001334307-Credit-card-CSC-fields) the CSV code is required, so I'm not sure why the transaction went through. ","priority":"high","status":"solved","recipient":null,"requester_id":18555792808,"submitter_id":18555792808,"assignee_id":18397661467,"organization_id":14044439387,"group_id":32371087,"collaborator_ids":[19852937908],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["finalsite_cms","live","premium","rank__160","team__payments"],"custom_fields":[{"id":44261068,"value":"rank__160"},{"id":54375168,"value":"https://www.taftschool.org/giving/make-a-gift-clone"},{"id":54053907,"value":null},{"id":52068907,"value":"team__payments"},{"id":52776508,"value":null},{"id":52071007,"value":null},{"id":52436348,"value":""},{"id":55444748,"value":null},{"id":55449328,"value":null},{"id":54844667,"value":null}],"satisfaction_rating":{"score":"unoffered"},"sharing_agreement_ids":[],"fields":[{"id":44261068,"value":"rank__160"},{"id":54375168,"value":"https://www.taftschool.org/giving/make-a-gift-clone"},{"id":54053907,"value":null},{"id":52068907,"value":"team__payments"},{"id":52776508,"value":null},{"id":52071007,"value":null},{"id":52436348,"value":""},{"id":55444748,"value":null},{"id":55449328,"value":null},{"id":54844667,"value":null}],"ticket_form_id":421847,"brand_id":2741807,"satisfaction_probability":null,"allow_channelback":false}]};

var natural = require('natural');
var BrainJS = require('natural-brain');

var teamClassifier = new BrainJS();
var teamClassifier2 = new natural.LogisticRegressionClassifier();


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
	
	BrainJS.load('classifiers/teamClassifierBrain.json', null, function(err, classy) {

		console.log(classy.getClassifications(string));
		console.log(ticket.subject);
		console.log(classy.classify(string));
		});
		
	natural.LogisticRegressionClassifier.load('classifiers/teamClassifier.json', null, function(err, classy) {			

		console.log(classy.getClassifications(string));
		console.log(ticket.subject);
		console.log(classy.classify(string));
		});
}

