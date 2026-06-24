import { NextResponse } from 'next/server';

import prisma from '@/src/lib/prisma';

async function GET(req: Request, { params }: { params: Promise<{ id: string | undefined}> }) {
    try {
        const { id } = await params;

        if(!id) {
            return NextResponse.json({ error: 'Post ID is missing' }, { status: 400 });
        }

        const post = await prisma.blog.findUnique({
            where: {
                id: id
            },
            include: {
                postedBy: true
            }
        });

        if(!post) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export { GET }