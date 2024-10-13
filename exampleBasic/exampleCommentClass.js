class LikesService {
    constructor() {
        this.likes = 0;
        this.dislikes = 0;
    }

   like(){
        this.likes++;
    }

    dislikes(){
        this.dislikes++;
    }

    getLikes (){
        return this.likes;
    }

    getDislikes (){
        return this.dislikes;
    }
}

class Comment extends LikesService{
    constructor(message) {
        super();
        this.message = message;
    }
}

class CommentsService {
    constructor() {
        this.comments = [];
        this.commetsQty = 0;
    }

    getComments(){
        return this.comments;
    }

    addComment(comment){
        this.commetsQty++;
        this.comments.push({id: this.commetsQty, comment});
    }
}

console.log("New instance with class");
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