import React from 'react';
import Link from 'next/link';

import { notFound } from 'next/navigation';

import type { BlogsType } from '@/src/types/types';

const dummyPosts: BlogsType[] = [
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

async function PostPage({ params }: { params: Promise<{ postId: string, username: string }> }) {
    const { postId, username } = await params;

    const post = dummyPosts.find(p => p.id === Number(postId));

    if(!post) {
        throw notFound();
    }

    return (
        <div className='w-full h-full flex flex-col items-start justify-start'>
            <div className='w-full border-b border-accent/20 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 self-start'>
                <div className='space-y-1'>
                    <span className='text-xs font-mono text-accent/90 tracking-wider uppercase block'>
                        Dynamic Archive Hub &gt; Blog Space
                    </span>
                    <h1 className='font-heading text-foreground text-xl tracking-wide uppercase truncate max-w-xl'>
                        {post.title}
                    </h1>
                </div>
                <Link href={`/${username}/blogs`} className='text-xs font-mono text-muted-foreground hover:text-accent border border-muted-foreground hover:border-accent/40 bg-muted/90 px-4 py-2 rounded-lg transition-all w-fit shrink-0'>
                    &larr; Return to Index
                </Link>
            </div>

            <article className='w-full max-w-none bg-muted/90 border border-muted-foreground/30 p-6 md:p-10 rounded-xl backdrop-blur-sm shadow-xl space-y-6'>
                <div className='flex items-center space-x-3 text-xs font-mono text-muted-foreground border-b border-muted pb-4'>
                    <span className='text-zinc-400 font-medium'>By @{post.author}</span>
                    <span>•</span>
                    <span className='text-accent/80'>DevFlow Blog Post</span>
                </div>

                <p className='font-body text-muted-foreground text-sm md:text-base leading-relaxed tracking-normal whitespace-pre-wrap text-justify'>
                    {post.content}
                </p>
            </article>
        </div>
    );
}

export default PostPage;