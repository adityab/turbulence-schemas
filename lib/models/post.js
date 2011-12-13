// Post Schema 
PostSchema = new Schema({
    // Creation date
    date: { type: Date, default: Date.now, required: true },
    // The author of the post
    authorAgent: { type: Schema.ObjectId, ref: 'Agent', required: true },
    // The agent this post is directed to
    targetAgent: { type: Schema.ObjectId, ref: 'Agent' },
    // The post this post is directed to (reply)
    targetPost: { type: Schema.ObjectId, ref: 'Post' },
    // Visibility flags
    visibility: { type: String, enum: ['public', 'custom', 'private'], default: 'public', required: true },
    // Agents that have read access to this post
    canRead: { type: [{ type: Schema.ObjectId, ref: 'Agent' }] },
    // Agents that have write (edit/delete) access to this post, like in a wiki
// -> TODO:  canWrite: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    // Upvotes and downvotes
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    // Payload of the post
    data: {
        // type of the post a string
        postType: { type: String, required: true },
        // we need a completely arbitrary schema type, so we won't use a ref
        content: { type: Schema.ObjectId, required: true }
    }
});

PostSchema.methods.create = function create(author, options, type, contentId, callback) {
    if(!author || !options.visibility || !type || !contentId)
        callback(new Error("PostSchema.methods.create: Bad arguments"));
    else {
        this.authorAgent = author;
        this.visibility = options.visibility;
        this.data.postType = type;
        this.data.content = contentId;
        callback(null);
    }
};

mongoose.model('Post', PostSchema);