// A Status Update
StatusSchema = new Schema({
    text: { type: String, required: true },
    tags: [String],
});

mongoose.model('content_Status', StatusSchema);
