// Agent schema for an arbitrary agent type
AgentSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    data: {
        agentType: { type: String, required: true },
        content: { type: Schema.ObjectId, required: true, unique: true }
    }   
});

AgentSchema.methods.create = function create(object, callback) {
    if(!object.data.agentType || !object.data.content)
        callback(new Error('AgentSchema.methods.create: Bad arguments'));
    else {
        this.data.agentType = object.data.agentType;
        this.data.content = object.data.content;
        callback(null);
    }
};

mongoose.model('agent', AgentSchema, 'agent');
