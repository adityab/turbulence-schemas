mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('./models/schemas.js');
require('./controllers/agentSchemas.js');
require('./controllers/contentSchemas.js');
require('./controllers/access.js');
require('./controllers/init.js');

mongoose.connect('mongodb://localhost/metastreams_db_1');

var Person = mongoose.model('agent_Person');
var Agent = mongoose.model('Agent');

var person = new Person();
var agent = new Agent();

person.create('adityab', 'Aditya', 'Bhatt', [{key: 'email', val: 'aditya@adityabhatt.org'}], function(err) {
    if(err) console.log(err.message);
    else {
        agent.create('agent_Person', person._id, function(err) {
            if(err) console.log(err.message);
            else {
                person.save(function(err) {
                    if(err) console.log(err.message);
                    else {
                        agent.save(function(err) {
                            if(err) console.log(err.message);
                            else {
                                console.log(person);
                                console.log(agent);
                                mongoose.disconnect();
                            }
                        });
                    }
                });
            }
        });
    }
});

