// A Status Update
StatusSchema = new Schema({
    text: { type: String, required: true },
    tags: [String],
});

StatusSchema.methods.create = function create(object, callback) {
    if(!object.text)
        callback(new Error("StatusSchema.methods.create: Bad arguments"));
    else {
        this.text = object.text;
        this.tags = object.tags;
        callback(null);
    }
};

mongoose.model('post_status', StatusSchema, 'post_status');
