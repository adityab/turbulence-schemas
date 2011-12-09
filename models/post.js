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
    // Agents that have read access to this post
    canRead: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    // Agents that have write (edit/delete) access to this post, like in a wiki
    canWrite: { type: [{ type: Schema.ObjectId, ref: 'Agent' }], required: true },
    // Upvotes and downvotes
    upvotes: Number,
    downvotes: Number,
    // Payload of the post
    data: {
        postType: { type: String, required: true },
        content: { type: Schema.ObjectId, required: true }
    }
});
