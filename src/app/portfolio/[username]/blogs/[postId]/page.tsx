import React from 'react';

async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;

    return (
        <>
            <h1> this is the post page </h1>
            <p>{ postId }</p>
        </>
    );
}

export default PostPage;