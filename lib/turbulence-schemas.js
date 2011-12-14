mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// load schema models
require('./models/keyvalschema.js');
require('./models/agent.js');
require('./models/post.js');
require('./models/agentSchemas.js');
require('./models/postSchemas.js');

module.exports.Agent = mongoose.model('agent');
module.exports.Post = mongoose.model('post');

module.exports.model = function(modelname) {
    return mongoose.model(modelname);
}

module.exports.connect = function(server, db, callback) {
    mongoose.connect('mongodb://' + server + '/' + db, callback);
}

module.exports.disconnect = function() {
    mongoose.disconnect();
}
