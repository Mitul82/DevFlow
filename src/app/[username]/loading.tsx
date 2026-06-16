import React from 'react';

function Loading() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 min-h-screen min-w-full animate-pulse'>
            <div className='w-full min-h-[calc(100vh-6rem)] p-10 md:col-span-8 flex flex-col justify-center space-y-10'>
                <div className='p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/40 backdrop-blur-sm space-y-4'>
                    <div className='h-5 bg-zinc-800 rounded w-1/4 mb-4' />
                    <div className='h-4 bg-zinc-800 rounded w-full' />
                    <div className='h-4 bg-zinc-800 rounded w-11/12' />
                    <div className='h-4 bg-zinc-800 rounded w-10/12' />
                </div>
                
                <div className='mt-10 space-y-6'>
                    <div className='h-6 bg-zinc-800 rounded w-48 mx-auto' />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className='h-32 w-full p-5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between'>
                                <div className='space-y-2'>
                                    <div className='h-5 bg-zinc-800 rounded w-2/3' />
                                    <div className='h-3 bg-zinc-800 rounded w-full' />
                                </div>
                                <div className='h-3 bg-zinc-800 rounded w-1/3 mt-4' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;