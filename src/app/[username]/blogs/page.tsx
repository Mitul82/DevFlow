import React from 'react';
import Link from 'next/link';

import CreateBlog from '@/src/components/blogs/CreateBlogButton';

import { auth } from '@/src/auth';
import type { BlogsType } from '@/src/types/types';

export const revalidate = 604800;

const dummyBlogs: BlogsType[] = [
    {
        id: 0,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 1,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 2,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 3,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 4,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 5,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 6,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    },
    {
        id: 7,
        title:'test',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam ratione, libero minima necessitatibus quidem similique culpa enim ducimus eaque cupiditate, dolorum quaerat vitae eveniet deserunt repudiandae? Recusandae, fugiat nihil',
        author: 'Mitul82'
    }
]

// const dummyBlogs: BlogsType[] = [];

async function BlogsPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } =  await params;

    const session = await auth();

    const isOwner = session?.user && (session.user as any).username.toLowerCase() === username.toLowerCase();
    
    return (
        <div>
            {dummyBlogs.length > 0 ? (
                <div>
                    <div className='w-full border-b border-accent/20 pb-4 mb-6 flex justify-center items-center'>
                        <h1 className='font-heading text-accent/80 text-xl tracking-widder'>📝 {username}'s Blog Post's</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                        {dummyBlogs.map((blog: BlogsType, index) => (
                            <Link href={`/${username}/blogs/${index}`} key={index} className='bg-muted p-5 rounded-lg hover:cursor-pointer hover:scale-95 ease-in-out duration-300 hover:transition-transform hover:bg-muted/90'>
                                <h1 className='font-heading text-sm text-accent'>{blog.title}</h1>
                                <p className='font-body text-xs'>{blog.content}</p>
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