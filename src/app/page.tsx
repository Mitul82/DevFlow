import React from 'react';
import Image from 'next/image';

import UserInput from '@/src/components/homepage/UserInput';

function HomePage() {
    return (
        <div className='min-w-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center z-10 -mb-10'>
                <Image src='/github.png' height={50} width={25} alt='GitHub Logo' className='rounded-full object-cover w-15 h-15'/>
                <p className='font-heading'>GitHub DevFlow</p>
            </div>
            <div className=' w-2/4 h-auto flex flex-col justify-center items-center bg-card border border-accent rounded-2xl overflow-hidden'>
                <div className='p-10 md:mt-20'>
                    <UserInput/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;