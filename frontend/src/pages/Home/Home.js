import React, { useState, useEffect } from 'react';

import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';
import api from '../../services/api';

import {
    NewPostButton,
    PostsDiv,
    Section,
    Categories
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
    }, [])

    return (
        <>
            <LoggedNavbar />
            <main>
                <NewPostButton>
                    New post
                </NewPostButton>
                <Section>
                    <PostsDiv>
                        {posts.map(post => (
                            <p>{post.title}</p>
                        ))}
                    </PostsDiv>

                    <Categories>
                        <h3>Categories</h3>
                        <ul>
                           {categories.map(category => (
                               <li key={category._id}>{category.name}</li>
                           ))}
                        </ul>
                    </Categories>
                </Section>
                
                
            </main>
        </>
    );
}