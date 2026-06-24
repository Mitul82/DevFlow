'use client';

import React from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';

function CreateBlog() {
    const router = useRouter();

    const [isPending, startTransition] = React.useTransition();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<{title: string, content: string}>({ title: '', content: '' });

    async function createBlog({ title, content }: { title: string, content: string }) {
        try {
            const { data } = await axios.post('http://localhost:5173/api/blogs', { title, content });
            
            setIsOpen(false);
            setFormData({ title: '', content: '' });

            startTransition(() => {
                router.refresh();
            });
            
            return;
        } catch (err) {
            console.error(err);
    
            return err;
        }
    }

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
                            <input onChange={(e: any) => setFormData({...formData, title: e.target.value})} type='text' placeholder='Post Title' className='w-full p-2.5 bg-muted/90 border border-muted-foreground/30 rounded text-foreground'/>
                            <textarea onChange={(e: any) => setFormData({...formData, content: e.target.value})} placeholder='Write your thoughts...' rows={5} className='w-full p-2.5 bg-muted/90 border border-muted-foreground/30 rounded text-foreground'/>
                        </div>

                        <div className='flex justify-end space-x-2 font-mono text-xs pt-2'>
                            <button onClick={() => setIsOpen(false)} className='px-4 py-2 bg-muted/90 text-muted-foregrounf rounded hover:text-foreground hover:cursor-pointer'>
                                CANCEL
                            </button>
                            <button onClick={() => createBlog(formData)} className='px-4 py-2 bg-accent text-foreground rounded hover:bg-accent/80 hover:cursor-pointer'>
                                {isPending ? 'PUBLISHING...' : 'PUBLISH'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateBlog;