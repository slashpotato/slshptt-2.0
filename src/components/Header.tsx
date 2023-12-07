"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderTitle() {
	var text: string = usePathname();
	if (typeof window !== "undefined" && window.localStorage) {
		if (localStorage.getItem('headerpath') != 'true') {
			text = 'slshptt';
		}
	} else {
		text = 'slshptt';
	}

	if (text == '/') {
		text = 'home';
	}
	if (text != 'slshptt' && text != 'home') {
		text = text.substring(1);
	}

	return (
		<Link className='fixed' href='/'>{text}</Link>
	)
}