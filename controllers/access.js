// save an agent to DB and log it
saveAgent = function(agent) {
    agent.save( function(err) {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log('Saved <' + agent.category + '> agent with ID ' + agent._id + ' and username <' + agent.data.username + '>');
    });
}


var Post = mongoose.model('Post');

// create a post
createPost = function(author, options, type, content) { 
    // throw up on null author, we must have an author
    if (author == undefined)                throw new Error('undefined author');
    
    // check for agents' existence later
    if (options.visibility == undefined)    throw new Error('undefined visibility');
    
    var post = new Post();
    post.authorAgent = author;
    post.visibility = options.visibility;
    
    // TODO: Add other options too
    
    post.data.postType = type;
    post.data.content = content._id;

    return post;
}

// save a post
savePost = function(post) {
   post.save( function(err) {
       if(err) {
           console.log(err.message);
           return;
       }
        console.log('Saved <' + post.visibility + '> of type <' + post.data.postType + '>');
   });
}
