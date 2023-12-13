"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { Geologica } from 'next/font/google'

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export default function Path() {
	var text: string = usePathname()
	
	if (typeof window !== 'undefined' && window.innerWidth < 500) {
		text = '';
	}

	return (
		<span id='path' className={geologica.className + ' text-stone-500 dark:text-stone-600 text-lg absolute ml-1 top-0 items-center justify-center inline-flex h-full'}>{text}</span>
	)
}