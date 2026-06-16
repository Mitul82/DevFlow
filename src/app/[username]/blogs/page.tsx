import React from 'react';

async function BlogsPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } =  await params;
    
    return (
        <>
            <h1>This is the blogs page</h1>
            {username}
        </>        
    );
}

export default BlogsPage;