import React from "react";
import { useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";


export default function Header(){
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:4000/profile',{
        credentials:'include',
        }).then(response =>{
            response.json().then(userInfo =>{
                setUserInfo(userInfo);
            });

        });
        
    },[setUserInfo]);

    function logout(){
        fetch('http://localhost:4000/logout',{
            credentials:'include',
            method:'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;


    return (
     <header>
        <Link to="/" className = "logo">Javier's Blog</Link>
        <nav>
            {username && (
                <>
                    <button className="home_create"><Link to="/create">Create New Post</Link></button>
                    <button className="home_logout" onClick={logout}>Logout</button>
                </>
            )}
            {!username && (
                <>
                    <button className="home_login"><Link to="/login">Login</Link></button>
                    <button className="home_register"><Link to="/register">Register</Link></button>
                </>
            )}

        </nav>
     </header>
    );

}