"use client";

type onoff = "on" | "off";
var isActive: onoff;

if (typeof window !== "undefined" && window.localStorage) {
	
}

function specifyIcon(setting: string) {
	if (localStorage.getItem(setting) == 'true') {
		isActive = 'on';
	} else {
		isActive = 'off';
		localStorage.setItem(setting, 'false')
	}

	const elem = document.getElementById(setting + '-btn');
	if (elem) {
		elem.textContent = 'toggle_' + isActive;
	}
}

function switchSetting(setting: string) {
	switch (localStorage.getItem(setting)) {
		case 'true':
			localStorage.setItem(setting, 'false');
			break;

		case 'false':
			localStorage.setItem(setting, 'true');
			break;

		default:
			localStorage.setItem(setting, 'false');
			break;
	}

	specifyIcon(setting);
}

export default function Setting({ disname, sysname }: { disname: string, sysname: string }) {
	switch (localStorage.getItem(sysname)) {
		case 'true':
			isActive = 'on';
			break;
	
		case 'false':
			isActive = 'off';
			break;

		default:
			isActive = 'off';
			break;
	}

	return (
		<li id={sysname} className="flex justify-between">
			<span className="mr-10">
				{disname}
			</span>
			<button onClick={() => switchSetting(sysname)} className="material-symbols-rounded" id={sysname + '-btn'}>
				toggle_{isActive}
			</button>
		</li>
	)
}