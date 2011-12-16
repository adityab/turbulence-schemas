// An agent type
PersonSchema = new Schema({
    username: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    gender: { type: String, enum: ['male', 'female', 'other'] },
    identities: [KeyValSchema]
});

PersonSchema.methods.create = function create(object, callback) {
    if (!object.username)
        callback(new Error('PersonSchema.methods.create: badly typed arguments'));
    else {
        this.username = object.username;
        this.firstName = object.firstName;
        this.lastName = object.lastName;
        this.identities = object.identities;
        this.gender = object.gender;

        callback(null);
    }
}

mongoose.model('agent_person', PersonSchema, 'agent_person');
