mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// load schema models
require('./models/keyvalschema.js');
require('./models/agent.js');
require('./models/post.js');
require('./models/agentSchemas.js');
require('./models/postSchemas.js');

var Agent = mongoose.model('Agent');
var Post = mongoose.model('Post');

