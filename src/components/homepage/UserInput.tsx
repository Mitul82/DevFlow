'use client';

import React from 'react';
import Form from 'next/form';

import { useRouter } from 'next/navigation';

function UserInput() {
    const [userName, setUserName] = React.useState<string>('');
    const router = useRouter();

    const handleSubmit = async () => {
        try {
            console.log(userName);

            router.replace(`/${userName}`);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <Form action={ handleSubmit } className='flex flex-col gap-4 w-full h-auto items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full'>
                    <label htmlFor='username' className='text-foreground font-heading text-xs md:text-base'>Enter your GitHub username</label>
                    <input id='username' type='text' required onChange={(e) => setUserName(e.target.value)} className='bg-foreground/50 w-3/4 h-5 p-4 rounded-lg border-2 border-accent'/>
                </div>

                <button type='submit' className='bg-accent w-1/4 p-2 rounded-xl hover:bg-accent-foreground hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>
                    &rarr;
                </button>
            </Form>
        </div>
    );
}

export default UserInput;