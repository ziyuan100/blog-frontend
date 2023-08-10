/* eslint-disable react/prop-types */

import { Fab } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostFormFields from "./PostFormFields";

export default function NewPostForm(){
    const [newPost, setNewPost] = useState({title: "", content: ""});
    const navigate = useNavigate();

    const handleChange= (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        console.log("field", field);
        console.log("value", value);
        setNewPost(current => {
            current[field] = value;
            return {...current};
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           axios.post(`//localhost:3000/new`,
                newPost,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            navigate("/");
        } catch (err) {
            console.error(err);
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <PostFormFields post={newPost} handleChange={handleChange}/>
            <Fab variant="extended" sx={{position: "fixed", bottom: 50, right: 100}} color="primary" type="submit">Publish</Fab>
        </form>
    )
}