/* eslint-disable react/prop-types */

import { Fab } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostFormFields from "./PostFormFields";

export default function EditPostForm({ postObj }){
    const [post, setPost] = useState(postObj);

    useEffect(() => {
        // WTF how is this working?? 
        // This useEffect hook was meant to just change the state of EditPostForm after postObj changes (once api call returns), since react only rerenders components
        // if state changes and not if props change, but i did not take into account that when post changes, this callback function should be called, setting the
        // state to be the postObj prop(i.e. the postObj passed in from Edit). So, why tf does the postObj also change after making changes? Doesn't handleChange only alter post??

        // console.log("postObj: ", postObj)
        // console.log("post", post)
        if (postObj !== post){
            setPost(postObj)
        }
    }, [postObj, post])

    const navigate = useNavigate();

    const handleChange= (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        // console.log("field", field);
        // console.log("value", value);
        setPost(current => {
            current[field] = value;
            return {...current};
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           axios.put(`//localhost:3000/edit`,
                post,
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
            <PostFormFields post={post} handleChange={handleChange}/>
            <Fab variant="extended" sx={{position: "fixed", bottom: 50, right: 100}} color="primary" type="submit">Edit</Fab>
        </form>
    )
}
