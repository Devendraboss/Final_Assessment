import React from 'react';
import { useState } from 'react';


function Homepage() {
  const [title,setTitle] = useState ('')
  const [textarea,setTextarea] = useState('')
  const [tag,setTag] = useState('')

  function createBlog(e) {

    console.log("ttl",Content);
    e.preventDefault();

}


  return (
    <div>
        <form action="" onSubmit={(e)=>Homepage(e)} className='myblog'>
        <h1>Blog Post Creation</h1>
        
            Title : <input type="title" id = "title" placeholder='write the title' value={title} onChange={(e)=>setTitle(e.target.value) } />
            <br />  <br />
            Content : <input type="textarea" id="textarea" value={textarea} onChange={(e)=>setTextarea(e.target.value) } />  <br />  <br />
            Optional Tag : <input type="tag" placeholder='optional tag someone' value={tag} onChange={(e)=>setTag(e.target.value) } />
            <br />  <br />

            <button type='submit' onSubmit={(e)=>createBlog(e)}
            >Create blog</button>
                    </form>
      
    </div>
    

  )
}

export default Homepage
