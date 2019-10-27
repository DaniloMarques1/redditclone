import React, { useState } from 'react';
import LoggedNav from '../../components/LoggedNavbar/LoggedNavbar';

import {
    Form,
    Content,
    DivTitle,
    DivCategory,
    DivContent,
    Main,
    DivButton
} from './styles'

import {
    Input,
    Label,
    Button
} from '../../Styles/formStyles';

import api from '../../services/api';


export default function CreatePost() {
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
                        <Input />
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