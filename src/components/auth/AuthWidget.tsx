import { signIn, signOut, auth } from '@/src/auth';

async function AuthWidget() {
    const session = await auth();

    if(!session) {
        return (
            <form action={async () => { 'use server'; await signIn("github"); }}>
                <button className='px-4 py-2 bg-accent text-foreground font-mono text-sm rounded hover:bg-accent-foreground hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>
                    Sync with GitHub
                </button>
            </form>
        );
    }

    return (
        <div className='flex items-center gap-4'>
            <p className='text-sm font-mono text-zinc-400'>Logged in as @{(session.user as any).username}</p>
            <form action={async () => { 'use server'; await signOut(); }}>
                <button className='text-xs text-red-400 underline font-mono hover:text-red-600 hover:cursor-pointer hover:transition-transform duration-300 ease-in-out hover:scale-95'>Disconnect</button>
            </form>
        </div>
    );
}

export default AuthWidget;