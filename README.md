# AutoTriagr

AutoTriagr is an unfinished app that used natural language processing to examine the contents of a ticket, evaluate it for topic and urgency, and automatically update a ticket in Zendesk with that information. The goal was to free up a large portion of the triager's role to provide more time to work on the tickets themselves.

###How it works: 
Ticket data is sent to the classifier app. This uses the "natural" library for NodeJS (https://github.com/NaturalNode/natural) to search the subject, description, and other relevant fields and classify it for both topic and urgency, using a logistic regression algorithm. It then outputs those values with a reliability rating. If that rating is high enough, it would be automatically updated; otherwise, it would be flagged for a human to examine manually.*
