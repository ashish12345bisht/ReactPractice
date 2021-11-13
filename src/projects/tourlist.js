import React,{useState} from "react";
import './tours.css';

const Tourlist=(props)=>{
    const [users,setUsers]=useState(props.users);
    const altData=(id) => {
        let newPeople = users.filter((user)=>user.id != id);
        setUsers(newPeople);
    }
    return <>
    <h1 className="heading">Tours</h1>
    <div className="tours">
    {users.map((user)=>{
        const {id,name,info,image} = user;
        return<>
        
                <div key={id} className="place">
                    <img src={image} alt={name}/>
                    <h2>{name}</h2>
                    <p>{info}</p>
                    <button onClick={()=>altData(id)}>Not Interested</button>
                </div>
        </>
    })}
    </div>
    </>
    ;
}

export default Tourlist;