import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { notFound } from 'next/navigation';

import api from '@/src/utils/api';

import type { UserData } from '@/src/types/types';

export const revalidate = 604800;

const fetchUser = async (userName: string) => {
    try {
        const { data } = await api.get(`/users/${userName}`, {  });
        
        return data;
    } catch (err: unknown) {
        console.error(err);
        throw notFound();
    }
}

const checkUserReadme = async (userName: string): Promise<boolean> => {
    try {
        await api.get(`https://raw.githubusercontent.com/${userName}/${userName}/main/README.md`);

        return true;
    } catch {
        try {
            await api.get(`https://raw.githubusercontent.com/${userName}/${userName}/master/README.md`);

            return true;
        } catch {
            return false;
        }
    }
}

async function UserLayout({ children, params }: { children: React.ReactNode, params: Promise<{ username: string }> }) {
    const { username } = await params;

    const [ user, hasReadme ]: [ user: UserData, hasReadme: boolean ] = await Promise.all([
        fetchUser(username),
        checkUserReadme(username)
    ]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-12 min-h-screen min-w-full'>
            <div className={`w-full md:col-span-4 md:pl-5 self-start ${hasReadme ? 'md:sticky md:top-44 h-auto pt-6 md:pt-0' : 'mt-6 md:mt-0 md:flex md:items-center md:min-h-[calc(100vh-4rem)]'}`}>
                <div className='w-full px-4'>
                    <div className='flex flex-col bg-card border border-accent p-10 rounded-lg backdrop-blur-3xl'>
                        <div className='flex items-center justify-start'>
                            <Image src={user?.avatar_url} alt={`${username}'s Avatar`} height={100} width={100} className='rounded-full border-2 border-accent-foreground'/>
                            <div className='flex flex-col'>
                                <h1 className='font-bold text-xl pl-4'>{user?.name}</h1>
                                <h6 className='font-medium text-lg pl-4'>@{username}</h6>
                            </div>
                        </div>
                        <p className='font-heading text-sm mt-8'>📍{user?.location}</p>
                        {user.bio && <p className='font-body text-base'>{user?.bio}</p>}
                        <Link href={user?.html_url} target='_blank' referrerPolicy='no-referrer' className='bg-accent mt-2 md:w-2/4 p-2 rounded-xl hover:bg-accent-foreground hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>
                            View GitHub Page &rarr;
                        </Link>

                        <Link href={`/${username}/blogs`} className='bg-accent mt-2 md:w-2/4 p-2 rounded-xl hover:bg-accent-foreground hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>
                            View {username}'s blogs &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-full min-h-[calc(100vh-6rem)] p-10 md:col-span-8 flex flex-col justify-start'>
                { children }
            </div>
        </div>
    );
}

export default UserLayout;