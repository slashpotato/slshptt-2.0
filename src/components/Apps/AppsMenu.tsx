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
		<button className='ml-1 my-auto' onClick={switchMenu}>
			apps
			<div className='fixed h-fit min-h-[10px] bg-stone-800 rounded-md transition-all origin-top-right' id='menu' style={{ scale: '0' }}>
				<ul className='py-2 gap-1'>
					<App name='Settings' icon='settings' link='/settings' />
					<App name='Projects' icon='extension' link='/projects' />
					<App name='Tools' icon='handyman' link='/tools' />
				</ul>
			</div>
			<style jsx>{`
				#menu {
					width: ${width}px;
					right: 20px;
				}
      		`}</style>
		</button>
	)
}