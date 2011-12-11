// An agent type
PersonSchema = new Schema({
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    identities: [KeyValSchema]
});

PersonSchema.methods.create = function create(username, firstName, lastName, identities, callback) {
    if (!username || !firstName || !lastName || !identities )
        callback(new Error('PersonSchema.methods.create: badly typed arguments'));
    else {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.identities = identities;
        callback(null);
    }
}

mongoose.model('agent_Person', PersonSchema);
