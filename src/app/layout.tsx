import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import type { Metadata } from 'next';

const geistSans = Geist({
	variable: '--font-body',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-heading',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'DevFlow',
	description: 'DevFlow is a dynamic, developer-centric multi-tenant portfolio and blog engine built to exploit the cutting-edge features of the Next.js App Router. Instead of building a static portfolio just for yourself, DevFlow allows any developer to input their GitHub username and instantly generate a beautifully optimized, server-rendered portfolio and blog layout.',
}

function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
    	<html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      		<body className='min-h-full flex flex-col items-center justify-center'>
				{ children }
			</body>
    	</html>
  	);
}

export default RootLayout;