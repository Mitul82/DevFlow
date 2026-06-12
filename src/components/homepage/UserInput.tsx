'use client';

import React from 'react';
import Form from 'next/form';

function UserInput() {
    const [userName, setUserName] = React.useState<string>('');

    return (
        <div>
            <span>the input form/component goes here</span>
        </div>
    );
}

export default UserInput;