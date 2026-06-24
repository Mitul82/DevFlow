import React from 'react';
import Image from 'next/image';

import UserInput from '@/src/components/homepage/UserInput';

function HomePage() {
    return (
        <div className='w-full min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 box-border'>
            <div className='w-full max-w-xl flex flex-col items-center justify-center relative -mb-17'>
                <Image src='/github.png' priority height={50} width={25} alt='GitHub Logo' className='rounded-full object-cover w-15 h-15'/>
                <h1 className='font-heading text-xl md:text-2xl font-bold tracking-wider text-foreground uppercase'>GitHub DevFlow</h1>
                <p className='font-body text-xs md:text-sm text-muted-foreground mt-1 max-w-xs md:max-w-none'>Your personal linktree-esque developer portfolio</p>
            </div>
            <div className='md:w-2/4 h-auto flex flex-col justify-center items-center bg-card border border-accent rounded-2xl overflow-hidden'>
                <div className='p-10 mt-12 w-full'>
                    <UserInput/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;