import { TextField, Box, Fab } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostForm(){
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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TextField 
                    placeholder="Add title" 
                    // When multiline is true, textAlign center stops working, maybe it's because input changes to textarea??
                    multiline
                    sx={{ pt: 2, fontSize: 70, input: {textAlign: "center"} }} 
                    variant="standard" 
                    InputProps={{ disableUnderline: true, style: {fontWeight: "bold", width: 800} }}   
                    name="title"
                    value={newPost.title}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    multiline
                    placeholder="Add Content"
                    variant="standard"
                    sx={{fontSize: 20}}
                    InputProps={{disableUnderline: true, style: {width: 800}}}
                    name="content"
                    value={newPost.content}
                    onChange={handleChange}
                    required
                />

                {/* Tags not done yet, TODO */}
            </Box>

            <Fab variant="extended" sx={{position: "fixed", bottom: 50, right: 100}} color="primary" type="submit">Publish</Fab>
        </form>
    )
}