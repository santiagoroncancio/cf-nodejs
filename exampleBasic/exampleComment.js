function LikesService(){
    this.likes = 0;
    this.dislikes = 0;
}

LikesService.prototype.like = function(){
    this.likes++;
}

LikesService.prototype.dislikes = function(){
    this.dislikes++;
}

LikesService.prototype.getLikes = function(){
    return this.likes;
}

LikesService.prototype.getDislikes = function(){
    return this.dislikes;
}

function Comment(message) {
    LikesService.call(this);
    this.message = message;
}

Comment.prototype = Object.create(LikesService.prototype);
Comment.prototype.constructor = Comment;

function CommentsService(){
    this.comments = [];
    this.commetsQty = 0;
}

CommentsService.prototype.getComments = function(){
    return this.comments;
}

CommentsService.prototype.addComment = function(comment){
    this.commetsQty++;
    this.comments.push({id: this.commetsQty, comment});
}

console.log("New instance");
const thread = new CommentsService();
console.log(thread);
console.log(thread.getComments());

const firstComment = new Comment("This is a test");
console.log(firstComment);

thread.addComment(firstComment);
console.log(thread.getComments());

firstComment.like();
console.log(firstComment);
console.log(thread.getComments());