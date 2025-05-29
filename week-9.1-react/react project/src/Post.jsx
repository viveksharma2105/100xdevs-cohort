// const { useState } = require("react");

// function App() {
//     const [posts, setPost] = useState([])

//     const PostComponents  = posts.map(post => <PostComponents
//     name={post.name}
//     subtitle={post.subtitle}
//     time= {post.time}
//     image = {post.image}
//     description = {post.description}

//     />) 

//     function AddComponent() {
//         setPost([...posts,{
//             name:'vivek',
//             subtitle:'1000 followers',
//             time:'2m ago',
//             image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_960_720.jpg',
//             description:'Keep doing...'
//         }])
        
//     }

//     return <div>
//         <button onClick={AddComponent}>
//             Add a new Post
//         </button>
//         {PostComponents}
//     </div>
    
// }

// export default App