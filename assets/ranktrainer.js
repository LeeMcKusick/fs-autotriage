var natural = require('natural');

var rankClassifier = new natural.LogisticRegressionClassifier();

rankClassifier.addDocument('critical','Triage Me');
rankClassifier.addDocument('503','Triage Me');
rankClassifier.addDocument('site down','Triage Me');
rankClassifier.addDocument('site is down','Triage Me');

rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('urgent','Triage Me');
rankClassifier.addDocument('emergency','Triage Me');
rankClassifier.addDocument('homepage','Triage Me');
rankClassifier.addDocument('time sensitive','Triage Me');
rankClassifier.addDocument('site error','Triage Me');
rankClassifier.addDocument('soon','Triage Me');
rankClassifier.addDocument('upcoming','Triage Me');
rankClassifier.addDocument('this afternoon','Triage Me');
rankClassifier.addDocument('this morning','Triage Me');
rankClassifier.addDocument('Monday','Triage Me');
rankClassifier.addDocument('Tuesday','Triage Me');
rankClassifier.addDocument('Wednesday','Triage Me');
rankClassifier.addDocument('Thursday','Triage Me');
rankClassifier.addDocument('Friday','Triage Me');
rankClassifier.addDocument('today','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('tomorrow','Triage Me');
rankClassifier.addDocument('next week','Triage Me');
rankClassifier.addDocument('asap','Triage Me');
rankClassifier.addDocument('ASAP','Triage Me');
rankClassifier.addDocument('ASAP','Triage Me');
rankClassifier.addDocument('ASAP','Triage Me');
rankClassifier.addDocument('ASAP','Triage Me');
rankClassifier.addDocument('as soon as possible','Triage Me');
rankClassifier.addDocument('as soon as possible','Triage Me');
rankClassifier.addDocument('as soon as possible','Triage Me');
rankClassifier.addDocument('FBI','Triage Me');
rankClassifier.addDocument('important','Triage Me');
rankClassifier.addDocument('important','Triage Me');
rankClassifier.addDocument('important','Triage Me');
rankClassifier.addDocument('important','Triage Me');
rankClassifier.addDocument('important event','Triage Me');
rankClassifier.addDocument('crashed','Triage Me');
rankClassifier.addDocument('restore','Triage Me');
rankClassifier.addDocument('Head of School','Triage Me');
rankClassifier.addDocument('vital','Triage Me');
rankClassifier.addDocument('disappointed','Triage Me');
rankClassifier.addDocument('big deal','Triage Me');
rankClassifier.addDocument('high priority','Triage Me');
rankClassifier.addDocument('high priority','Triage Me');
rankClassifier.addDocument('high priority','Triage Me');
rankClassifier.addDocument('SOS','Triage Me');
rankClassifier.addDocument('SOS','Triage Me');
rankClassifier.addDocument('SOS!','Triage Me');
rankClassifier.addDocument('unprofessional','Triage Me');
rankClassifier.addDocument('unprofessional','Triage Me');
rankClassifier.addDocument('rush','Triage Me');
rankClassifier.addDocument('rush','Triage Me');
rankClassifier.addDocument('end of the week','Triage Me');
rankClassifier.addDocument('quickly','Triage Me');
rankClassifier.addDocument('quickly as possible','Triage Me');
rankClassifier.addDocument('many complaints','Triage Me');
rankClassifier.addDocument('right away','Triage Me');

/*
//200
rankClassifier.addDocument('critical', 'rank__200');
rankClassifier.addDocument('site is down', 'rank__200');
rankClassifier.addDocument('503', 'rank__200');
rankClassifier.addDocument('site down', 'rank__200');

//190
rankClassifier.addDocument('urgent', 'rank__190');
rankClassifier.addDocument('this afternoon', 'rank__190');
//rankClassifier.addDocument('need this done today', 'rank__190');
//rankClassifier.addDocument('has to go out soon', 'rank__190');
//rankClassifier.addDocument('nothing is working', 'rank__190');

//180
rankClassifier.addDocument('by Monday', 'rank__180');
rankClassifier.addDocument('by Tuesday', 'rank__180');
rankClassifier.addDocument('by Wednesday', 'rank__180');
rankClassifier.addDocument('by Thursday', 'rank__180');
rankClassifier.addDocument('by Friday', 'rank__180');
rankClassifier.addDocument('FBI', 'rank__180');
rankClassifier.addDocument('HELP!', 'rank__180');
rankClassifier.addDocument('ASAP', 'rank__180');
rankClassifier.addDocument('ASAP', 'rank__180');
rankClassifier.addDocument('ready to launch', 'rank__180');

rankClassifier.addDocument('CLICK THIS LINK TO HEAR YOUR MESSAGE', 'rank__180');
rankClassifier.addDocument('CHECK YOUR VOICE MESSAGE BY PHONE OR WEB', 'rank__180');
rankClassifier.addDocument('CLICK THIS LINK TO DELETE YOUR MESSAGE', 'rank__180');


//170
rankClassifier.addDocument('highpriority', 'rank__170');
rankClassifier.addDocument('very worrisome', 'rank__170');
rankClassifier.addDocument('launch', 'rank__170');
rankClassifier.addDocument('pci compliance', 'rank__170');
rankClassifier.addDocument('soon', 'rank__170');
rankClassifier.addDocument('accidentally', 'rank__170');
rankClassifier.addDocument('error message', 'rank__170');
rankClassifier.addDocument('locked', 'rank__170');
rankClassifier.addDocument('important', 'rank__170');
rankClassifier.addDocument('strategically important', 'rank__170');
rankClassifier.addDocument('next week', 'rank__170');
rankClassifier.addDocument('timely', 'rank__170');

//160
rankClassifier.addDocument('lost', 'rank__160');
rankClassifier.addDocument('major', 'rank__160');
rankClassifier.addDocument('trouble', 'rank__160');
rankClassifier.addDocument('head of school', 'rank__160');
rankClassifier.addDocument('data upload', 'rank__160');
rankClassifier.addDocument('messed up', 'rank__160');
rankClassifier.addDocument('updated database', 'rank__160');


//150
//rankClassifier.addDocument('normal priority', 'rank__150');
rankClassifier.addDocument('how do I', 'rank__150');
rankClassifier.addDocument('is there a way', 'rank__150');

//140 and below
rankClassifier.addDocument('lowpriority', 'rank__140');
rankClassifier.addDocument('New Client Site Setup', 'rank__140');
*/

//Rank - Finalize and save to file
rankClassifier.train();
rankClassifier.save('classifiers/rankClassifier.json', function(err, rankClassifier){
	console.log('Saving ranks...');
	});
