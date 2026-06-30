
async function getPost(){
    const res = await fetch( "https://jsonplaceholder.typicode.com/posts" , {
        cache: 'force-cache'
        });

        return res.json();
}

const PostPages = async () => {

    const posts = await getPost();

  return (
    <div>
      <h1>Blog Posts</h1>

      {
        posts.slice(0,10).map((post)=>{

           const {id,title, body} = post;

            return(
                <div key={id}>
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            )}
        
        )}

    </div>
  )
}

export default PostPages
