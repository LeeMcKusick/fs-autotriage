var TEAMID = 52068907;
var RANKID = 44261068;
var TEAMS = [];
var SERVER_URL = "http://127.0.0.1:8081";

var theTicket = {};

$(function() {
    
	//Set up Zendesk App settings
	var client = ZAFClient.init();
    client.invoke('resize', { width: '100%', height: '225px' });
	
	//Get the ticket ID and act on it
	client.get('ticket.id').then(function(data) {
		
		
		var ticketId = data['ticket.id']; // something like 29043265
	
		var settings = {
			url: '/api/v2/tickets/' + ticketId + '.json',
			type:'GET',
			dataType: 'json'};

		$('#submitTeam').click( function() { newTraining('team', TEAMID); $('#submitTeam').hide(); });
		$('#submitRank').click( function() { newTraining('rank', RANKID); $('#submitRank').hide(); });
	
		client.request(settings).then(
		function(data) {
			
			theTicket = data.ticket;
			//Get the current value for Team
			var currentTeam = getCurrentSetTeam(data.ticket);
		  
			//Check to see if it already exists
			//If it doesn't, run the prediction
			//If it does, don't do anything.
			//if (currentTeam.length == 0) {
				autoTriage(client, data.ticket);
			//} else {
				//$('#noPredictions').show();
				//$('#content').text('Team is ' + currentTeam);
			//}
		}, function(response) {
		  console.error(response);
		}
		);
	});
});

function autoTriage(client, ticket) {
	
	console.dir(ticket);
	/*
	var commentSettings = {
		url: '/api/v2/tickets/' + ticket.id + '/comments.json',
		type:'GET',
		dataType: 'json'};
	
	client.request(commentSettings).then(
		function(data) {
			//console.dir(data);
			//console.log('comments:');
			
			//See if there's an attachment and return the filename
			try {
			var filename = data.comments[0]['attachments'][0]['file_name'];
			console.log(filename);
			} catch (err) {
				console.log('No attachment');
			}
			//console.dir(data);
		},
		function(response) {
		  console.error(response);
		}
	  );
	*/

	
	/*client.request(attachmentsSettings).then(
		function(data) {
		  //console.dir(data);
		  console.log('attachments:');
		  console.dir(data);
		},
		function(response) {
		  console.error(response);
		}
	  );*/
	  
	var triage_data = {
		'subject': '-',		
		'team': '-',
		'rank': '-'
	};
	
	//console.dir(ticket.fields);
	var relevantURL = getFieldValue(ticket.fields, 54375168);
	
	
	$.post( SERVER_URL, {
		subject: ticket.subject, 
		description: ticket.description,
		priority: ticket.priority,
		method: 'predictTeam'
	}, function( teamdata ) {
			
		if (!teamdata.pass) {
			showManual(client, ticket);
		} else {
			//data = JSON.parse(data.team);
			//console.log('setting team
			$('#predictedTeam').html( teamdata.classification.label );
			$('#predictedTeamVal').html( teamdata.classification.value );
			
			console.log('test');
			console.log(teamdata.classification.value);
			console.log(teamdata);		
			showPredictions();
			//$('#test').html('<p>T: ' + data.team + '<br>R: ' + data.rank);
			//console.log( teamdata );
		}
	});
	
	$.post( SERVER_URL, {
		subject: ticket.subject, 
		description: ticket.description,
		method: 'predictRank'
	}, function( rankdata ) {
		if (!rankdata.pass) {
			showManual(client);
		} else {
			console.log(rankdata.classification.value);
			if (rankdata.classification.value > 0.51) {
				$('#predictedRank').text( rankdata.classification.label );
				$('#predictedRankVal').html( rankdata.classification.value );
			} else {
			
				var r = '';
				switch (ticket.priority) {
					case 'normal': 
						r = 'rank__150';
						break;
					case 'high': 
						r = 'rank__160';
						break;
					case 'low': 
						r = 'rank__140';
						break;
					case 'urgent': 
						r = 'rank__200';
						break;
					default:
						r = 'rank__150';	
				}
			
				$('#predictedRank').text( r );
				$('#predictedRankVal').html( ticket.priority + ', ' + rankdata.classification.value);
			
			}
			

			
			//$('#predictedRank').text( rankdata.classification.label );
			//$('#predictedRankVal').html( rankdata.classification.value );

		}
		console.log(rankdata);
	});
	
	//var t = nlp(ticket.description).
	//console.log(ticket.subject);
	
	var source = $('#autotriage-template').html();
	var template = Handlebars.compile(source);
	var html = template(triage_data);
	
	//$('#content').html(html);
}
function newTraining(type, id) {
	
	//Grab the option that the human triager selects from the dropdown
	var val = $('#' + id + 'Selector option:selected').text();
	var subj = $('#ticketSubject').val();
	var desc = $('#ticketDescription').val();
	
	
	//Send the tag value, the field ID, and the ticket data to the server
	$.post( SERVER_URL, {
		subject: subj, 
		description: desc,
		value: val,
		method: 'train' + type
	}, function( data ) {
		console.log(data);
			//if (data.team === '-') {
				//showManual(client);
			//} else {
				//$('#test').html('<p>T: ' + data.team + '<br>R: ' + data.rank);
				//console.log( data );
	});
}

//Grabs the current set tag value for Team
function getCurrentSetTeam(ticket) {
	return getFieldValue(ticket.fields, TEAMID);
}

//Given a numerical field ID, grabs all of the options and field values in an array
function getDropdownValues(client, id) {
	var settings = {
    url: '/api/v2/ticket_fields/' + id + '.json',
    type:'GET',
    dataType: 'json'};
	
	return client.request(settings).then( 
	 function(data) {
		 
		 console.log(data);
		 var field = data.ticket_field.custom_field_options;
		 var options = [];
		 
		 field.forEach( function(a) {
			 options.push( {'id':a.id, 'value':a.
			 value} );
			 
			 $('#' + id + 'Selector').append('<option name="' + id + '" value="' + a.id + '">' + a.value + '</option>');
		 });
		 
		 
	 }, function(response) {
		console.error(response);
	 });
	
}


function showManual(client, ticket) {
	console.log('AutoTriage Failed. Displaying Manual Form');
	$('#ticketSubject').val(ticket.subject);
	$('#ticketDescription').val(ticket.description);
	getDropdownValues(client, TEAMID);
	getDropdownValues(client, RANKID);
	$('#updateForm').show();
	//console.log(stuff);
}
function showPredictions() {
	$('#completedPredictions').show();
}


function getFieldValue(fields, id) {
	return $.grep(fields, function(e){ return e.id === id; })[0].value;;
}

function getAttachments(comment) {
	var attachmentsSettings = {
		url: '/api/v2/attachments/' + id + '.json',
		type:'GET',
		dataType: 'json'};
}

function showError() {
	var error_data = {
		'status': 404,
		'statusText': 'Not found'
	};
	var source = $("#error-template").html();
	var template = Handlebars.compile(source);
	var html = template(error_data);
	$("#content").html(html);
}