// Agent schema for an arbitrary agent type
AgentSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    category: { type: String, default: 'person', required: true },
    data: {
        username: { type: String, unique: true },
        firstName: String,
        lastName: String,
        identities: [KeyValSchema]
    }   
});
