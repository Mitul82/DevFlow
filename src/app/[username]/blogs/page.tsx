import React from 'react';
import Link from 'next/link';

import { unstable_cache } from 'next/cache';

import api from '@/src/utils/api';
import CreateBlog from '@/src/components/blogs/CreateBlogButton';

import { auth } from '@/src/auth';
import type { BlogsType } from '@/src/types/types';

export const revalidate = 604800;

async function getBlogsRaw(username: string) {
    try {
        const { data } = await api.get(`/api/blogs?username=${username}`);

        return data;
    } catch (err) {
        console.error("Axios database fetch failure:", err);
        
        return [];
    }
}

const getCachedBlogs = unstable_cache(
    async (username: string) => getBlogsRaw(username),
    ['blogs-static-cache'],
    { 
        revalidate: 604800,
        tags: ['user-blogs-tag']
    }
);

async function BlogsPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } =  await params;

    const blogs = await getCachedBlogs(username);

    const session = await auth();

    const isOwner = session?.user && (session.user as any).name.toLowerCase() === username.toLowerCase();
    
    return (
        <div>
            {blogs.length > 0 ? (
                <div>
                    <div className='w-full border-b border-accent/20 pb-4 mb-6 flex justify-between items-center'>
                        <h1 className='font-heading text-accent/80 text-xl tracking-widder'>📝 {username}'s Blog Post's</h1>
                        <Link href={`/${username}`} className='text-xs font-mono text-muted-foreground hover:text-accent border border-muted-foreground hover:border-accent/40 bg-muted/90 px-4 py-2 rounded-lg transition-all w-fit shrink-0'>
                            &larr; Back
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                        {blogs.map((blog: BlogsType) => (
                            <Link href={`/${username}/blogs/${blog.id}`} key={blog.id} className='bg-muted p-5 rounded-lg hover:cursor-pointer hover:scale-95 ease-in-out duration-300 hover:transition-transform hover:bg-muted/90 md:h-35 overflow-hidden'>
                                <h1 className='font-heading text-sm text-accent'>{blog.title}</h1>
                                <p className='font-body text-xs mt-2'>{blog.content}</p>
                            </Link>
                        ))}
                    </div>
                    {isOwner && (
                        <div className=' mt-10 items-center justify-center flex'>
                            <CreateBlog/>
                        </div>
                    )}
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-heading text-xl text-accent/80'>{username} has not posted any blog's yet</h1>
                    {isOwner ? (
                        <CreateBlog/>
                    ) : (
                        <p className='text-xs font-mono text-muted-foreground'>Check back later for new entries!</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default BlogsPage;