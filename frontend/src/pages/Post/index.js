import React, { useState } from 'react';

import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';
import api from '../../services/api';

import {
    PostDiv,
    Content,
    Comments,
    InputComment,
    Container,
    FormGroup,
    CommentsDiv,
} from './styles';

export default function Post( { history }) {
    const [post, setPost] = useState(history.location.state.post);
    const [comment, setComment] = useState('');

    const handleComment = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/post/${post._id}/comment`, {comment}, {
                headers: {
                    token: localStorage.getItem('token')
                }
            });
            const  response = await api.get(`/post/${post._id}`);
            setPost(response.data);

        } catch(e) {
            console.log(e.response);
        }
    }

    return (
        <div>
            <LoggedNavbar />
            <PostDiv>
                <Container>
                    <h2>
                        {post.title}
                    </h2>
                    <Content>
                            {post.content}
                    </Content>

                    <Comments>
                        <FormGroup onSubmit={handleComment}>
                            <InputComment
                            id='comment'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='What are your thoughts?'
                            autoComplete='off'
                            />
                            <button>Comment</button>
                        </FormGroup>
                        {post.comments.map(comment => (
                            <CommentsDiv key={comment._id}>
                                <p>{comment.comment}</p>
                                <span>{comment.user.nickName}</span>
                            </CommentsDiv>
                                
                        ))}

                    </Comments>

                </Container>
           
            </PostDiv>
        </div>
    );
}