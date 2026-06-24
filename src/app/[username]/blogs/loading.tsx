import React from 'react';

function BlogsLoading() {
    const skeletonCards = Array.from({ length: 4 });

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
            <div className='w-full border-b border-accent/10 pb-4 mb-6 flex justify-between items-center animate-pulse'>
                <div className='h-7 bg-zinc-800 rounded-md w-48 md:w-64' />
                <div className='h-8 bg-zinc-800 rounded-lg w-16 shrink-0' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                {skeletonCards.map((_, index) => (
                    <div key={index} className='bg-muted/50 p-5 rounded-lg border border-zinc-800/30 flex flex-col gap-3 animate-pulse'>
                        <div className='h-5 bg-zinc-800 rounded-md w-3/4' />

                        <div className='space-y-2 mt-1'>
                            <div className='h-3 bg-zinc-800/60 rounded w-full' />
                            <div className='h-3 bg-zinc-800/60 rounded w-5/6' />
                            <div className='h-3 bg-zinc-800/60 rounded w-2/3' />
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-10 flex items-center justify-center animate-pulse'>
                <div className='h-9 bg-zinc-800/80 rounded-md w-32' />
            </div>
        </div>
    );
}

export default BlogsLoading;