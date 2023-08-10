/* eslint-disable react/prop-types */
import { TextField, Box } from "@mui/material";

export default function PostFormFields({ post, handleChange }){
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <TextField 
                placeholder="Add title" 
                // When multiline is true, textAlign center stops working, maybe it's because input changes to textarea??
                multiline
                sx={{ pt: 2, fontSize: 70, input: {textAlign: "center"} }} 
                variant="standard" 
                InputProps={{ disableUnderline: true, style: {fontWeight: "bold", width: 800} }}   
                name="title"
                value={post.title}
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
                value={post.content}
                onChange={handleChange}
                required
            />

            {/* Tags not done yet, TODO */}
        </Box>
    )
}