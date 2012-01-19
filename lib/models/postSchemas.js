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

PasteSchema = new Schema({
    text: { type: String, required: true },
    language: { type: String, default: 'plaintext', required: true }
});

PasteSchema.methods.create = function (object, callback) {
    if(!object.text)
        return callback(new Error("PasteSchema.methods.create: Bad arguments"));
    else {
        this.text = object.text;
        this.language = object.language;
        callback(null);
    }
}

mongoose.model('post_paste', PasteSchema, 'post_paste');
