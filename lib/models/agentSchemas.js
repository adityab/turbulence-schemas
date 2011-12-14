// An agent type
PersonSchema = new Schema({
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    identities: [KeyValSchema]
});

PersonSchema.methods.create = function create(object, callback) {
    if (!object.username || !object.firstName || !object.lastName || !object.identities )
        callback(new Error('PersonSchema.methods.create: badly typed arguments'));
    else {
        this.username = object.username;
        this.firstName = object.firstName;
        this.lastName = object.lastName;
        this.identities = object.identities;
        callback(null);
    }
}

mongoose.model('agent_person', PersonSchema, 'agent_person');
