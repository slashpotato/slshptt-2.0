"use client";

import React from 'react'
import { Geologica } from 'next/font/google'
import App from '@/components/Apps/App'

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export default function Apps() {
	function switchMenu() {
		const elem = document.getElementById('menu');
		if (elem) {
			switch (elem.style.scale) {
				case '1':
					elem.style.scale = '0';
					break;

				case '0':
					elem.style.scale = '1';
					break;

				default:
					break;
			}
		}
	}

	const width = 210

	return (
		<span className='ml-1 my-auto'>
			<button onClick={switchMenu}>
				apps
			</button>
			<div className='fixed h-fit min-h-[10px] bg-stone-800 bg-opacity-50 backdrop-blur-md rounded-2xl transition-all origin-top-right mt-5 w-56 right-0' id='menu' style={{ scale: '0' }}>
				<ul className='p-[0.585rem] gap-[1px] grid'>
					<App name='Settings' icon='settings' link='/settings' target='_self' />
					<App name='Projects' icon='extension' link='/projects' target='_self' />
					<App name='Tools' icon='handyman' link='/tools' target='_self' />
					<App name='Discord Server' icon='discord' link='https://discord.com/invite/WFaGuxgNPp' target='_blank' />
				</ul>
			</div>
		</span>
	)
}