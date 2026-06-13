import React from 'react';

function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>user blogs roote layout</h1>
            { children }
        </>
    );
}

export default BlogsLayout;