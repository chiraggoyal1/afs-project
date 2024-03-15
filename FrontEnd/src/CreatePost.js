import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./create_post.css";

export default function CreatePost() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("jwtToken")) {
            navigate('/login');
        }
    }, [])

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleForm = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post("http://localhost:3001/posts", {
                title: title,
                content: content
            },
                {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem("jwtToken")
                    }
                })

            if (res.status === 201) {
                navigate('/posts');
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const go_back = () => {
        navigate('/posts');
    }

    return (
        <div className="create-div">
            <button className="back-button" onClick={go_back}>Go Back</button>
            <h1>Create Post</h1>
            <form onSubmit={handleForm} className="create-form">
                <input className="create-input" type='text' value={title} onChange={handleTitle} placeholder="Title" />
                <textarea className="create-input" rows="4" value={content} onChange={handleContent} placeholder="Content" />
                <button className="create-button">Post</button>
            </form>
        </div>
    );
}
