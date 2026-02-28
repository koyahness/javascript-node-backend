//typicallly you will have an... build some blog API or something
//this would be where we fetch our posts and other stuff
//usuualy one would a database like from a third party packes like mongoDB or sqlite etc

const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]


const getPosts = () => posts;

export default getPosts