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

export default function Register({ history }) {
    const [nickName, setNickName] = useState('');
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            await api.post('/user/new', {
                nickName,
                name,
                email,
                password
            });
            history.push('/login');

        } catch(error) {
            console.log(error.response.data);
        }
      

    }

    return (
        <>
            <Navbar />
            <Container>
                <FormContainer onSubmit={handleRegister}>
                <Label htmlFor="nickName">Your Nickname</Label>
                    <Input
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                    id='nickName'
                    type='text'
                    placeholder='coolnickname'
                    length='70'
                    />
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id='name'
                    type='text'
                    placeholder='Your Name'
                    length='70'
                    />
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
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id='confirmPassword'
                    type='password'
                    placeholder='*********'
                    length='70'
                    />
                    <Button type='submit'>Sign in</Button>
                </FormContainer>
            </Container>  
        </>  
    );
}