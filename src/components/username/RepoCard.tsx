import React from 'react';

import type { RepoData } from '@/src/types/types';

function RepoCard({ repo }: { repo: RepoData }) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors block"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-purple-300 hover:underline">{repo.name}</h3>
              <span className="text-xs text-yellow-500">⭐ {repo.stargazers_count}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 line-clamp-2">{repo.description || "No description provided."}</p>
            {repo.language && (
              <span className="inline-block text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full mt-3">
                {repo.language}
              </span>
            )}
          </a>
        </div>
    );
}

export default RepoCard