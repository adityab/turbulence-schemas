// Agent schema for an arbitrary agent type
AgentSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    data: {
        agentType: { type: String, required: true },
        content: { type: Schema.ObjectId, required: true, unique: true }
    }   
});

AgentSchema.methods.create = function create(agentType, content, callback) {
    if(!agentType || !content)
        callback(new Error('AgentSchema.methods.create: Bad arguments'));
    else {
        this.data.agentType = agentType;
        this.data.content = content;
        callback(null);
    }
};
