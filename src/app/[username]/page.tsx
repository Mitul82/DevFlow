import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import api from '@/src/utils/api';

type UserData = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    url: string,
    html_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    user_view_type: string,
    site_admin: boolean,
    name: string,
    company: string | null,
    blog: string,
    location: string,
    email: string,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string
}

type RepoData = {

}

const fetchUser = async (userName: string) => {
    try {
        const { data } = await api.get(`/users/${userName}`);
        
        return data;
    } catch (err: unknown) {
        console.error(err);
    }
}

const fetchUserRepo = async (userName: string) => {
    try {
        const { data } = await api.get(`/users/${userName}/repos?sort=updated&per_page=6`);
        
        return data;
    } catch (err: unknown) {
        console.error(err);
    }
}

async function UserProfile({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    const user: UserData = await fetchUser(username);
    const repo: RepoData = await fetchUserRepo(username);

    return (
        <>
            <h1>this is the user profile page</h1>
            <p>{ username }</p>
        </>
    );
}

export default UserProfile;