mongoose = require('mongoose'),
    Schema = mongoose.Schema;

require('./models/schemas.js');
require('./controllers/agentSchemas.js');
require('./controllers/contentSchemas.js');
require('./controllers/init.js');

mongoose.connect('mongodb://localhost/metastreams_db_1');

var Person = mongoose.model('agent_Person');
var Agent = mongoose.model('Agent');
var Status = mongoose.model('content_Status');
var Post = mongoose.model('Post');

var person = new Person();
var agent = new Agent();
var statusUpdate = new Status();
var post = new Post();

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
                                statusUpdate.create("This is my first status", ['declaration'], function(err) {
                                    if(err) console.log(err.message);
                                    else {
                                        post.create(agent, { visibility: 'public' }, 'content_Status', statusUpdate._id, function(err) {
                                            if(err) console.log(err.message);
                                            else {
                                                statusUpdate.save(function(err) {
                                                    if(err) console.log(err.message);
                                                    else {
                                                        post.save(function(err) {
                                                            if(err) console.log(err.message);
                                                            else {
                                                                console.log('all saved!');
                                                                mongoose.disconnect();
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

