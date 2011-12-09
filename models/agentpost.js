// A simple key-value pair
KeyValSchema = new Schema({
    key: { type: String, required: true },
    val: { type: String, required: true }
});

// Agent schema for an arbitrary agent type
AgentSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    category: { type: String, default: 'person', required: true },
    data: {
        firstName: String,
        lastName: String,
        identities: [KeyValSchema]
    }   
});

// PostData schema for an arbitrary post type's data. Why is this not embedded in a Post? Because we want stuff like retweets
PostDataSchema = new Schema({
    postType: { type: String, required: true },
    keyvals: { type: [KeyValSchema], required: true }
});

// Post Schema 
PostSchema = new Schema({
    date: { type: Date, default: Date.now, required: true },
    authors: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    canRead: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    canWrite: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    data: { type: Schema.ObjectId, ref: 'PostData' }
});

var Agent = mongoose.model('Agent', AgentSchema);
var PostData = mongoose.model('PostData', PostDataSchema);
var Post = mongoose.model('Post', PostSchema);
