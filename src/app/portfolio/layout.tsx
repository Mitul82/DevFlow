import React from 'react';

function PortfolioLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className=''>
            <h1>Portfolio page layout</h1>
            {children}
        </div>
    )
}

export default PortfolioLayout;