import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';
import api from '../../services/api';

import {
    NewPostButton,
    PostsDiv,
    Section,
    Categories,
    Post
} from './styles';

export default function Home({ history }) {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        async function getCategories() {
            const response = await api.get('/category');
            setCategories(response.data);
        }
        getCategories();
    }, []);

    useEffect(() => {
        async function getPosts() {
            const response = await api.get('/post');
            setPosts(response.data);
        }
        getPosts();
    }, []);

    const handleFilter = async (category) => {
        console.log(category);
        const url = `/search/post/category?category=${category._id}`;
        const response = await api.get(url, {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        setPosts(response.data);
    }

    return (
        <>
            <LoggedNavbar />
            <main>
                <NewPostButton>
                    <Link to='/create'>New post</Link>
                </NewPostButton>
                <Section>
                    <PostsDiv>
                        {posts.length === 0 ? (<h1>No posts yet</h1>) : ''}
                        {posts.map(post => (
                            <Post key={post._id}>
                                <h3>{post.title}</h3>
                                <span>Author: {post.user.nickName}</span>
                                <div>
                                    <span>
                                        {
                                            post.content.length > 100 ? (post.content.slice(0, 100)+'...') : (post.content)
                                        } 

                                    </span>
                                </div>
                            </Post>
                        ))}
                        
                    </PostsDiv>

                    <Categories>
                        <h3>Categories</h3>
                        <ul>
                           {categories.map(category => (
                               <li onClick={() => handleFilter(category)} key={category._id}>{category.name}</li>
                           ))}
                        </ul>
                    </Categories>
                </Section>
                
                
            </main>
        </>
    );
}