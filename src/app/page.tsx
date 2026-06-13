import React from 'react';
import Image from 'next/image';

import UserInput from '@/src/components/homepage/UserInput';

function HomePage() {
    return (
        <div className='min-w-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center z-10 -mb-17'>
                <Image src='/github.png' height={50} width={25} alt='GitHub Logo' className='rounded-full object-cover w-15 h-15'/>
                <h1 className='font-heading'>GitHub DevFlow</h1>
                <p className='font-body'>Your personal linktree-esque developer portfolio</p>
            </div>
            <div className='w-2/4 h-auto flex flex-col justify-center items-center bg-card border border-accent rounded-2xl overflow-hidden'>
                <div className='p-10 mt-12 w-full'>
                    <UserInput/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;