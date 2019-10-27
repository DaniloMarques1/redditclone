import React, { useState, useEffect } from 'react';
import LoggedNav from '../../components/LoggedNavbar/LoggedNavbar';

import {
    Form,
    Content,
    DivTitle,
    DivCategory,
    DivContent,
    Main,
    DivButton,
    Select,
} from './styles'

import {
    Input,
    Label,
    Button
} from '../../Styles/formStyles';

import api from '../../services/api';


export default function CreatePost( { history } ) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([{_id: "1" , "name" : "-select a category"}]);
    const [selectedCategory, setSelected] = useState('');

    useEffect(() => {
        async function getCatgories() {
            const response = await api.get('/category');
            setCategories([...categories, ...response.data]);
        }
        getCatgories();
    }, [])

    const handleCreatePost = async (e) => {
        e.preventDefault();
        if (!selectedCategory) {
            console.log("Select a category first!")
            return false;
        }
        try {
            await api.post('/post/new', {
                title,
                content,
                category: selectedCategory
            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            
            history.push('/');
        } catch(e) {
            console.log(e.response.data);
        }
        
    } 

    return (
        <>
            <LoggedNav />
            <Main>
                <Form onSubmit={handleCreatePost}>
                    <DivTitle>
                        <Label>Post title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder='your title' />
                    </DivTitle>
                    <DivCategory>
                        <Label>Category</Label>
                        <Select value={selectedCategory} onChange={(e) => setSelected(e.target.value)}>
                            {categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </Select>
                    </DivCategory>
                    <DivContent>        
                        <Content value={content} onChange={(e) => setContent(e.target.value)} required placeholder='Your thoughts...'></Content>
                    </DivContent>
                    
                    <DivButton>
                        <Button>Create</Button>
                    </DivButton>

                </Form>
            </Main>
        </>
    );
}