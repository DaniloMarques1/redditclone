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

import Alert from '../../components/Alert/Alert';

export default function Register({ history }) {
    const [nickName, setNickName] = useState('');
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorBackground, setErrorBackground] = useState('');
    const [errorColor, setErrorColor] = useState('');
    document.title = 'Register';
    const handleRegister = async (e) => {
        e.preventDefault();
        
        //TODO verficar se as senhas batem

        if(password !== confirmPassword) {
            setErrorBackground('#980010');
            setErrorColor('white')
            return false;
        }

        try {
            await api.post('/user/new', {
                nickName,
                name,
                email,
                password
            });
            history.push('/login');

        } catch(error) {
            //TODO: Alert message
            setErrorMessage(error.response.data.message);
            
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <FormContainer onSubmit={handleRegister}>
                {errorMessage ? (<Alert message={errorMessage} />) : ''}
                <Label htmlFor="nickName">Your Nickname</Label>
                    <Input
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                    id='nickName'
                    required
                    type='text'
                    placeholder='coolnickname'
                    length='70'
                    />
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                    value={name}
                    required
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
                    required
                    id='email'
                    type='email'
                    placeholder='email@domain.com'
                    length='70'
                    />
                    <Label htmlFor="password">Your password</Label>
                    <Input
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    type='password'
                    placeholder='*********'
                    length='70'
                    />
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                    style={{backgroundColor: errorBackground, color: errorColor}}
                    value={confirmPassword}
                    required
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