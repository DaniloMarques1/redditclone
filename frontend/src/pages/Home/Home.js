import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';
import api from '../../services/api';

import {
    NewPostButton,
    PostsDiv,
    Section,
    Categories,
    Post,
    CategoriesSelect
} from './styles';

export default function Home({ history }) {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);


    async function getPosts() {
        const response = await api.get('/post');
        setPosts(response.data);
    }


    useEffect(()=> {
        async function getCategories() {
            const response = await api.get('/category');
            setCategories(response.data);
        }

        getCategories();
    }, []);

    useEffect(() => {
        getPosts();
    }, []);

    const handleFilter = async (id) => {
        if (id !== '-1') {
            const url = `/search/post/category?category=${id}`;
            const response = await api.get(url, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            console.log(response.data);
            setPosts(response.data);
        } else {
            getPosts();
        }

    }

    const handleClickPost = async (post) => {
        history.push('/post', {post: post});
    }

    return (
        <>
            <LoggedNavbar />
            <main>
                <NewPostButton>
                    <Link to='/create'>New post</Link>
                </NewPostButton>
                <Section>
                    <CategoriesSelect onChange= {(e) => handleFilter(e.target.value)}>
                        <option value='-1'>all categories</option>
                        {categories.map(category => (
                            <option value={category._id} key={category._id}>{category.name}</option>
                        ))}
                    </CategoriesSelect>

                    <PostsDiv>
                        {posts.length === 0 ? (<h1>No posts yet</h1>) : ''}
                        {posts.map(post => (
                            <Post key={post._id}>
                                <h3 onClick={() => handleClickPost(post)}>{post.title}</h3>
                                <span>Posted by: {post.user.nickName}</span>
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
                            <li onClick={() => handleFilter('-1')}>All categories</li>
                           {categories.map(category => (
                               <li onClick={() => handleFilter(category._id)} key={category._id}>{category.name}</li>
                           ))}
                        </ul>
                    </Categories>


                </Section>


            </main>
        </>
    );
}
