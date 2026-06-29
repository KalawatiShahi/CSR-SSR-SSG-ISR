import React from 'react'

const SingleProfile =async (props) => {
const user = await props.params;
    console.log(user);
  return (
    <div>
      <h1>user = {user.username}</h1>
    </div>
  )
}

export default SingleProfile
