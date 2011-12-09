mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('./models/schemas.js');
require('./controllers/contentSchemas.js');

mongoose.connect('mongodb://localhost/metastreams_db_1');

// load collections
var Agent = mongoose.model('Agent');
var Post = mongoose.model('Post');

var agent = new Agent();
agent.data.username = 'adityab';
agent.data.firstName = 'Aditya';
agent.data.lastName = 'Bhatt';
agent.data.identities.push({ key: 'email', val: 'aditya@adityabhatt.org'});

agent.save( function(err) {
    if(err) { 
        console.log(err.message);
        return;
    }
    console.log('saved agent with username ' + agent.data.username);
});

mongoose.disconnect();

