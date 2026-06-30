import React from 'react'
 
 const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';

const serverComp = async() => {
const res = await fetch(URL);
const data = await res.json();


await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  },3000);
})

  return (
    <div>
      <h1>This  is serverComp</h1>
      
        <ul>
            {
                data.map((curElem,index)=>{
                    return <li key={index}>{curElem.body}</li>
                })
            }
        </ul>
    
   
    </div>
  )
}

export default serverComp
