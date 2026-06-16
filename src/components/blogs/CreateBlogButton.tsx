'use client';

import React from 'react';

function CreateBlog() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className='bg-accent w-1/4 p-2 rounded-xl hover:bg-accent-foreground hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>
                + Write a blog post
            </button>

            {isOpen && (
                <div className='fixed inset-0 bg-background/70 backdrop-blur-md z-50 flex items-center justify-center p-4'>
                    <div className='bg-muted border border-accent p-8 rounded-xl max-w-md w-full space-y-4 shadow-2xl'>
                        <h2 className='text-xl font-heading text-forground uppercase'>Create a Blog Post</h2>

                        <div className='space-y-3 font-mono text-sm'>
                            <input type="text" placeholder="Post Title" className='w-full p-2.5 bg-muted/90 border border-muted-foreground/30 rounded text-foreground'/>
                            <textarea placeholder='Write your thoughts...' rows={5} className='w-full p-2.5 bg-muted/90 border border-muted-foreground/30 rounded text-foreground'/>
                        </div>

                        <div className='flex justify-end space-x-2 font-mono text-xs pt-2'>
                            <button onClick={() => setIsOpen(false)} className='px-4 py-2 bg-muted/90 text-muted-foregrounf rounded hover:text-foreground hover:cursor-pointer'>
                                CANCEL
                            </button>
                            <button className='px-4 py-2 bg-accent text-foreground rounded hover:bg-accent/80 hover:cursor-pointer'>
                                PUBLISH
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateBlog;