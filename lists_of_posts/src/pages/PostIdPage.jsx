import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFatching } from "../hooks/useFetching";
import PostServies from "../API/PostServies";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFatching(async(id) => {
        const response = await PostServies.getById(id)
        setPost(response.data)
    })
    useEffect(() =>{
        fetchPostById(params.id)
    }, [])
    return (
        <div>
            <h1>Пользоватьель открыл страницу поста с ID = {params.id}</h1>
            {isLoading
            ?<Loader/>
            :<div>{post.id}{post.title}</div>

        }
        </div>
    );
};
export default PostIdPage;