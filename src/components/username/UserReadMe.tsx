import react from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { unstable_cache } from 'next/cache';

import gApi from '@/src/utils/gApi';

async function getRawUserReadMe(userName: string) {
    try {
        const res = await gApi.get(`https://raw.githubusercontent.com/${userName}/${userName}/main/README.md`, { responseType: 'text' });

        return res.data;
    } catch (err: any) {
        if (err.response?.status === 404) {
            try {
                const fallBackRes = await gApi.get(`https://raw.githubusercontent.com/${userName}/${userName}/master/README.md`, { responseType: 'text'});

                return fallBackRes.data;
            } catch {
                return null;
            }
        }
        console.error(err);
        return null;
    }
}

const fetchUserReadMe = unstable_cache(
    async (userName: string) => getRawUserReadMe(userName),
    ['github-readme-cache'],
    { revalidate: 3600 }
);

async function UserReadMe({username}: {username: string}) {
    const userReadMe = await fetchUserReadMe(username);

    if(!userReadMe) return null;

    return (
        <div className='p-6 rounded-xl bg-muted/40 border border-muted-foreground hover:border-accent backdrop-blur-sm'>
            <article className='prose prose-invert max-w-none text-foreground text-sm'>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {userReadMe}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default UserReadMe;