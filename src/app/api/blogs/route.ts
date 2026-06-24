import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

import prisma from '@/src/lib/prisma';
import { auth } from '@/src/auth';

async function GET(req: Request) {
    try {
        const { searchParams } = await new URL(req.url);
        const username  = searchParams.get('username');

        if(!username) {
            return NextResponse.json({ error: 'Username required' }, { status: 400 });
        }

        const posts = await prisma.blog.findMany({
            orderBy: { postedAt: 'desc' },
            include: {
                postedBy: true
            },
            where: {
                postedBy: {
                    username: {
                        equals: username,
                        mode: 'insensitive'
                    }
                }
            }
        });
        
        return NextResponse.json(posts, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

async function POST(req: Request) {
    const session = await auth();

    if(!session?.user || !session?.user.id) {
        return NextResponse.redirect(new URL('/', req.url), { statusText: 'Unauthorized', status: 400 });
    }

    const { title, content }: { title: string, content: string } = await req.json();

    const blog = await prisma.blog.create({
        data: {
            title: title,
            content: content,
            postedById: session.user.id
        }
    });

    revalidateTag('user-blogs-tag', { expire: 604000 });
    revalidateTag('single-post-tag', { expire: 604000 });

    return NextResponse.json(blog, { status: 200 });
}

export { GET, POST }