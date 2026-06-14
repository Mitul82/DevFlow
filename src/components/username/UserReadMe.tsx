import react from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import api from '@/src/utils/api';

const fetchUserReadMe = async (userName: string) => {
    try {
        const res = await api.get(`https://raw.githubusercontent.com/${userName}/${userName}/main/README.md`, { responseType: 'text' });

        return res.data;
    } catch (err: any) {
        if(err.response?.status === 404) {
            try {
                const fallBackRes = await api.get(`https://raw.githubusercontent.com/${userName}/${userName}/master/README.md`, { responseType: 'text'});

                return fallBackRes.data;
            } catch (err: any) {
                return null
            }
        }

        console.error(err);
        return null;
    }
}

async function UserReadMe({username}: {username: string}) {
    const userReadMe = await fetchUserReadMe(username);

    if(!userReadMe) return null;

    return (
        <div className='p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm'>
            <article className='prose prose-invert max-w-none text-foreground text-sm'>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {userReadMe}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default UserReadMe;