import React, { useEffect, useState } from 'react'

export default function PostData() {
    let [newPost,setNewPost]=useState({id: '' ,title:'',body:''});
    let [postList,setPostList]=useState([])
    useEffect(()=>{
        handleData();
    },[])

    async function handledata()
    {
        let res=await Axios.get
    }
  return (
    <>




    
    </>
  )
}
