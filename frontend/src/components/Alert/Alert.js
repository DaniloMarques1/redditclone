import React from 'react';

import { AlertContainer, AlertP } from './styles';

export default function Alert({message}) {
    return (
        <AlertContainer>
            <AlertP>
                {message}
            </AlertP>
        </AlertContainer>
    );
}