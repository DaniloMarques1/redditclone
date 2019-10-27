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


export default function CreatePost() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCatgories() {
            const response = await api.get('/category');
            setCategories(response.data);
        }
        getCatgories();
    }, [])


    return (
        <>
            <LoggedNav />
            <Main>
                <Form>
                    <DivTitle>
                        <Label>Post title</Label>
                        <Input placeholder='your title' />
                    </DivTitle>
                    <DivCategory>
                        <Label>Category</Label>
                        <Select>
                            {categories.map(category => (
                                <option key={category._id}>{category.name}</option>
                            ))}
                        </Select>
                    </DivCategory>
                    <DivContent>        
                        <Content placeholder='Your thoughts...'></Content>
                    </DivContent>
                    
                    <DivButton>
                        <Button>Create</Button>
                    </DivButton>

                </Form>
            </Main>
        </>
    );
}