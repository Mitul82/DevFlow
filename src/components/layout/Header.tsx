import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AuthWidget from '@/src/components/auth/AuthWidget';

export default function Header() {
    return (
        <header className='w-full border-b border-muted-foreground/20 bg-background backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between'>
            <Link href='/' className='hover:scale-110 ease-in-out duration-300 hocer:transition-transform'>
                <Image src='/Devflow.png' alt='DevFlow Logo' width={100} height={100} loading='eager'/>
            </Link>

            <AuthWidget />
        </header>
    );
}