import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import api from '../../services/api';
import {
    FormContainer,
    Container,
    Input,
    Label,
    Button,
} from '../../Styles/formStyles'

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await api.post('/user', {
                email,
                password
            });
            
            history.push('/')

        } catch(error) {
            console.log( error.response.data);
        }


    }

    return (
        <>
            <Navbar />
            <Container>
                <FormContainer onSubmit={handleLogin}>
                    <Label htmlFor="email">Your email</Label>
                    <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    type='email'
                    placeholder='email@domain.com'
                    length='70'
                    />
                    <Label htmlFor="password">Your password</Label>
                    <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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