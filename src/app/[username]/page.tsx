import React from 'react';

import { notFound } from 'next/navigation';
import { unstable_cache } from 'next/cache';

import RepoCard from '@/src/components/username/RepoCard';
import UserReadMe from '@/src/components/username/UserReadMe';
import gApi from '@/src/utils/gApi';
import type { RepoData } from '@/src/types/types';

async function getRawUserRepo(userName: string) {
    try {
        const { data } = await gApi.get(`/users/${userName}/repos?sort=last_updated&per_page=6`);

        return data;
    } catch (err: unknown) {
        console.error(err);

        throw notFound();
    }
}

const fetchUserRepo = unstable_cache(
    async (userName: string) => getRawUserRepo(userName),
    ['github-repos-cache'],
    { revalidate: 1800 }
);

async function UserProfile({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    const repo: RepoData[] = await fetchUserRepo(username);
    
    return (
        <div>
            <UserReadMe username={username}/>
            
            <div className='mt-10'>
                <h2 className='text-xl font-bold font-heading text-accent-foreground mb-4 uppercase tracking-wider text-center'>
                    Featured Repositories
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {repo.length > 0 ? (
                        repo.map((repo: RepoData, index) => (
                            <RepoCard repo={repo} key={index}/>
                        ))
                    ) : (
                        <div className='flex flex-col items-center justify-center mt-10 md:col-span-2'>
                            <h1>{username} Has no public repositories.</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;