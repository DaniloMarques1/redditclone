import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
    FormContainer,
    Container,
    Input,
    Label,
    Button,
} from '../../Styles/formStyles'

export default function Login() {
    return (
        <>
            <Navbar />
            <Container>
                <FormContainer>
                    <Label htmlFor="email">Your email</Label>
                    <Input
                    id='email'
                    type='email'
                    placeholder='email@domain.com'
                    length='70'
                    />
                    <Label htmlFor="password">Your password</Label>
                    <Input
                    id='password'
                    type='password'
                    placeholder='*********'
                    length='70'
                    />
                    <Button>Sign in</Button>
                </FormContainer>
            </Container>  
        </>  
    );
}