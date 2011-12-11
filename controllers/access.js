// create a post
createPost = function(author, options, type, content, callback) { 
    // throw up on null author, we must have an author
    if (author == undefined) {
        callback(new Error('author in createPost is UNDEFINED'));
    }
    // check for agents' existence later
    if (options.visibility == undefined) {
        callback(new Error('options.visibility in createPost is UNDEFINED'));
    }
    
    // check for content type
    if (type == undefined){
        callback(new Error('content.type in createPost is UNDEFINED'));
    }

    var post = new Post();
    post.authorAgent = author;
    post.visibility = options.visibility;
    
    // TODO: Add other options too
    
    post.data.postType = type;
    post.data.content = content._id;

    callback(null, post, content);
}

// save a post
savePost = function(post, content, callback) {
    // save content first
    content.save( function(err) {
       if(err) {
           callback(err, null);
       }
       else {
           // and then post
           post.save( function(err) {
               if(err) {
                   callback(err, null);
               }
               else {
                   callback(null, post);
               }
            });
        }
    });
}
