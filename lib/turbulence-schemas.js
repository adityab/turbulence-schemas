mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// load schema models
require('./models/keyvalschema.js');
require('./models/agent.js');
require('./models/post.js');
require('./models/agentSchemas.js');
require('./models/postSchemas.js');

module.exports.Agent = mongoose.model('Agent');
module.exports.Post = mongoose.model('Post');

module.exports.agentTypes = {
    Person: mongoose.model('agent_Person')
};

module.exports.postTypes = {
    Status: mongoose.model('post_Status')
}

module.exports.connect = function(server, db, callback) {
    mongoose.connect('mongodb://' + server + '/' + db, callback(err));
}

module.exports.disconnect = function(callback) {
    mongoose.disconnect(callback(err));
}
