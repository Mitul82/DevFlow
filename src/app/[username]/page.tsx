export const revalidate = 604800;

import React from 'react';

import { notFound } from 'next/navigation';

import RepoCard from '@/src/components/username/RepoCard';
import UserReadMe from '@/src/components/username/UserReadMe';
import api from '@/src/utils/api';
import type { RepoData, UserData } from '@/src/types/types';

const fetchUserRepo = async (userName: string) => {
    try {
        const { data } = await api.get(`/users/${userName}/repos?sort=last_updated&per_page=6`);
        
        return data;
    } catch (err: unknown) {
        console.error(err);
        throw notFound();
    }
}

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
                    {repo && repo.map((r: RepoData, index) => (
                        <RepoCard repo={r} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;