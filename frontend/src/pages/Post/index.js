import React, { useState } from 'react';

import LoggedNavbar from '../../components/LoggedNavbar/LoggedNavbar';

import {
    PostDiv,
    Content
} from './styles';

export default function Post( { history }) {
    const [post, setPost] = useState(history.location.state.post);
    
    return (
        <div>
            <LoggedNavbar />
            <PostDiv>
                <div>
                    <h2>
                        {post.title}
                    </h2>
                    <Content>
                      
                            {post.content}
                      
                    </Content>
                </div>
            </PostDiv>
        </div>
    );
}