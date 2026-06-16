import React from 'react';
import Link from 'next/link';

import type { RepoData } from '@/src/types/types';

function RepoCard({ repo }: { repo: RepoData }) {
	const formattedDate = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : '';

	return (
		<div className='flex felx-col items-center justify-center min-w-full hover:transition-transform duration-300 ease-in-out hover:scale-95'>
			<Link key={repo.id} href={repo.html_url} target='_blank' referrerPolicy='no-referrer' className='p-5 rounded-xl bg-muted/40 border border-muted-foreground hover:border-accent transition-colors block min-w-full'>
				<div className='flex items-start justify-between'>
					<h3 className='text-accent hover:underline'>{repo.name}</h3>
					<span className='text-xs text-secondary-foreground'>⭐ {repo.stargazers_count}</span>
				</div>
				<p className='text-xs text-foreground mt-2 line-clamp-2'>{repo.description || 'No description provided.'}</p>
				<div className='flex items-start justify-between'>
					{repo.language && (
						<span className='inline-block text-xs bg-accent text-foreground px-2 py-0.5 rounded-full mt-4'>
							{repo.language}
						</span>
					)}
					<p className='inline-block text-xs text-foreground px-2 py-0.5 mt-4'>Last updated: {formattedDate}</p>
				</div>
			</Link>
		</div>
	);
}

export default RepoCard