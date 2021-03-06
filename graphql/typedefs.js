const {gql}=require("apollo-server");

module.exports=gql`

    type Post{
        id:ID!,
        body:String!,
        createdAt:String!,
        username:String!,
        comments:[Comment]!,
        likes:[Like],
        likeCount:Int!,
        commentCount:Int!
    }

    type Comment{
        id:ID!,
        createdAt:String!,
        username:String!,
        body:String!
    }

    type Like{
        id:ID!,
        createdAt:String!,
        username:String!
    }

    type Query{
        getPosts:[Post]
        getPost(postID:ID!):Post
    }
    type User{
        id: ID!
        email:String!
        token:String!
        username:String!
        createdAt:String
    }
    type Subscription{
        newPost:Post!
        
    }
    input RegisterInput{
        username:String!
        password:String!
        confirmPassword:String!
        email:String!
    }
    type Mutation{
        register(registerInput: RegisterInput):User!
        login(username:String!,password:String!):User!
        createPost(body:String!):Post!
        deletePost(postID:ID!):String!
        createComment(postID:String!,body:String!):Post!
        deleteComment(postID:ID!,commentID:ID!):Post!
        likePost(postID:ID!):Post!
    }
`;