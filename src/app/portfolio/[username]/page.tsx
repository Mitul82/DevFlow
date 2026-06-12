import React from 'react';

async function UserProfile({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    return (
        <>
            <h1>this is the user profile page</h1>
            <p>{ username }</p>
        </>
    );
}

export default UserProfile;