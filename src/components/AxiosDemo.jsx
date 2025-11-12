import React, { useState } from 'react'
import axios from 'axios';
export default function   Axiosdemo() {
     let[posts,setPosts]= useState([])
     const [newPost, setNewPost] = useState({ title: '', body: '' });
     
   async function fetchdata()
    {
        
          const response =await axios.get("https://jsonplaceholder.typicode.com/posts") ;
          console.log(response.data);
          setPosts(response.data)
    }

       function deletedata(id)
       {
           const response=  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
           setPosts(posts.filter(post=>post.id!==id))
       }

       async function updatedata(id)
                {
                  let response=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                    title:"Updated Title",
                    title:"Updated Body"
                  });
                  setPosts(posts.map(post=>post.id===id?{...post,title:"Title Updated statically",body:"Body Updated Statically"}:post))
                }

      async function postdata(e){
  e.preventDefault();

  let res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);

  setPosts([...posts, res.data]);
  setNewPost({title:"", body:""});
}

              

  // simple reusable button style
  const btnBase = {
    padding: '8px 14px',
    margin: '6px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const primaryStyle = {
    ...btnBase,
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none'
  };

  const dangerStyle = {
    ...btnBase,
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none'
  };

  const postBtnStyle = {
    ...btnBase,
    backgroundColor: '#198754',
    color: '#fff',
    border: 'none'
  };

  const fetchBtnStyle = {
    ...btnBase,
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none'
  };

  return (
    <>
        <section className='mt-3'>
          <form onSubmit={postdata} style={{display:'flex', gap: '8px', alignItems:'center', flexWrap:'wrap'}}>
  <input 
    type="text"
    placeholder='Title'
    value={newPost.title}
    onChange={(e)=>setNewPost({...newPost,title:e.target.value})}
    style={{padding:'8px', borderRadius:6, border:'1px solid #ccc', minWidth:200}}
  />

  <input 
    type="text"
    placeholder='Body'
    value={newPost.body}
    onChange={(e)=>setNewPost({...newPost,body:e.target.value})}
    style={{padding:'8px', borderRadius:6, border:'1px solid #ccc', minWidth:300}}
  />

  <button type="submit" style={postBtnStyle}>Post</button>
</form>

         

        </section>

    {
        posts.map((post)=>
        {
          return (
          <> 
          <div key={post.id} style={{border:"1px solid black",margin:"10px", padding:"10px", borderRadius:8}}>
            <p style={{margin:'4px 0', fontWeight:600}}>{post.title}</p>
            <p style={{margin:'4px 0'}}>{post.body}</p>
            <p style={{margin:'4px 0', color:'#666'}}>{post.id}</p>
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <button className='btn btn-primary' onClick={()=>{updatedata(post.id)}} style={primaryStyle}>Update</button>
              <button className='btn btn-danger' onClick={()=>{deletedata(post.id)}} style={dangerStyle}>Delete Post</button>
            </div>

           </div>
          </>
          )
        })
    }
  

   <h1 style={{fontSize:18}}>
     <button onClick={fetchdata} style={fetchBtnStyle}>Fetch Data</button>
   </h1>
   
    
    </>
  )
}