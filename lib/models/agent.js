// Agent schema for an arbitrary agent type
AgentSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    data: {
        agentType: { type: String, required: true },
        content: { type: Schema.ObjectId, required: true, unique: true }
    }   
});

AgentSchema.methods.create = function create(agentType, contentId, callback) {
    if(!agentType || !contentId)
        callback(new Error('AgentSchema.methods.create: Bad arguments'));
    else {
        this.data.agentType = agentType;
        this.data.content = contentId;
        callback(null);
    }
};

mongoose.model('agent', AgentSchema, 'agent');
