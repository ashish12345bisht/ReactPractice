import React, { useState, useEffect } from 'react';
import Tourlist from './tourlist';

const Tours=()=>{
    const url="https://course-api.com/react-tours-project";
    const [loading, setLoading]=useState(true);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState("default user");
    
    const getData=async()=>{
        const users = await fetch(url).then((resp)=>{
            if(resp.status >=200 && resp.status <300){
                return resp.json();
            }
            else{
                setLoading(false);
                setError(true);
            }
        });
        //const users = await response.json();
        setUsers(users);
        setLoading(false);
    }
    
    useEffect(()=>{
        getData();
    },[]);
    if(loading)
    {
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error...</h1>
    }
    return <Tourlist users={users}/>;
}

export default Tours;

//https://course-api.com/react-tours-project
