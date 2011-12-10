Agent = mongoose.model('Agent');
Post = mongoose.model('Post');

publicAgent = new Agent();
publicAgent.category = 'special';

saveAgent(publicAgent);
