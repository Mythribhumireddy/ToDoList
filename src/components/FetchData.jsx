import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function FetchData() {
    let [users,setUsers]=useState([]);
    let [name,setName]=useState({name:""});

    useEffect(()=>{
        handleData();


    },[])


    async function handleData()
    {
        let res=await Axios.get("https://jsonplaceholder.typicode.com/users");

        console.log(res);
        console.log(res.data);
        setUsers(res.data)
        console.log(users);
        
    }

    function handleName(e)
    {
        setName({name:e.target.value})
    }

    function handlePost(e)
    {
        

        let postData=async ()=>
        {
            let res= await Axios.post("https://jsonplaceholder.typicode.com/users",name)
            setUsers([...users,res.data]);
        }
    }

    return (
        <>
        {
            users.map((user)=>
            {
                <h1>{user.name}</h1>
            })
        }
        <form onSubmit={handlePost}>
                <input type="text" value={name.name} onChange={handleName}/>
                <input type="submit" />
        </form>
        

        </>
    )









}