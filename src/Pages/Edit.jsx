import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EditPostForm from "../Components/EditPostForm";
import Navbar from "../Components/Navbar";
import axios from "axios";

export default function Edit(){
    const { id } = useParams();
    const [post, setPost] = useState({title: "", content: ""})

    useEffect(() => {
        const findPost = async () => {
            try {
                let foundPost = await axios.get(`//localhost:3000/posts/id/${id}`)
                setPost(foundPost.data);
            } catch (err) {
                console.log(err);
                const foundPost = {title: "NA", content: "NA"};
                setPost(foundPost);
            }
        }
        findPost();
    }, [id])

    // console.log("Edit: ", post)


    return (
        <>
            <Navbar />
            <EditPostForm postObj={post}/>
        </>
    )
}