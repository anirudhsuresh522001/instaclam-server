const postsresolvers=require("./posts");
const usersresolvers=require("./users");
const commentsresolvers=require("./comments");

module.exports={
    Post:{
        likeCount:(parent)=>parent.likes.length,
        commentCount:(parent)=>parent.comments.length
    },
    Query:
    {
        ...postsresolvers.Query
    },
    Mutation:
    {
        ...usersresolvers.Mutation,
        ...postsresolvers.Mutation,
        ...commentsresolvers.Mutation
    },
    Subscription:{
        ...postsresolvers.Subscription
    }
};