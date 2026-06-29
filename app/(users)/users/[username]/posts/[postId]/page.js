
const SingleProfilePost =async (props) => {
const user = await props.params;
    console.log(user);
  return (
    <div>
      <h1>user : {user.username}, postId : {user.postId}</h1>
    </div>
  )
}

export default SingleProfilePost
