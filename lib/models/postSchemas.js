// A Status Update
StatusSchema = new Schema({
    text: { type: String, required: true },
    tags: [String],
});

StatusSchema.methods.create = function create(text, tags, callback) {
    if(!text)
        callback(new Error("StatusSchema.methods.create: Bad arguments"));
    else {
        this.text = text;
        this.tags = tags;
        callback(null);
    }
};

mongoose.model('post_Status', StatusSchema);
