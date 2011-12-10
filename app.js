mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('./models/schemas.js');
require('./controllers/contentSchemas.js');
require('./controllers/access.js');
require('./controllers/init.js');

mongoose.connect('mongodb://localhost/metastreams_db_1');

// create agent
var agent = new Agent();
agent.data.username = 'adityab';
agent.data.firstName = 'Aditya';
agent.data.lastName = 'Bhatt';
agent.data.identities.push({ key: 'email', val: 'aditya@adityabhatt.org'});
saveAgent(agent);

// create status
var Status = mongoose.model('content_Status');
var stat = new Status();
stat.text = "My first status update!";
stat.tags = ['first', 'tech'];

var post = createPost(agent, {visibility: 'public'}, 'content_Status', stat);
console.log(post);
savePost(post);

mongoose.disconnect();

