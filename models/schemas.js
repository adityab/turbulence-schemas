require('./keyvalschema.js');
require('./agent.js');
require('./post.js');

// create usable models
mongoose.model('Agent', AgentSchema);
mongoose.model('Post', PostSchema);
