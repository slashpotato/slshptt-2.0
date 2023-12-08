"use client";

import Setting from "@/components/Setting";

export default function Page() {
	return (
		<main className="flex w-full justify-center items-center" id="settings-main-div">
			<article className="w-max h-max inline-flex flex-col justify-center items-center m-auto gap-4">
				<h3>settings</h3>
				<div className="p-4 border-solid border-stone-600 border-8 rounded-3xl">
					<ul>
						
					</ul>
				</div>
				<h6 className="text-stone-700 text-xs flex items-center justify-center"><span className="material-symbols-rounded scale-75">info</span>some settings require reload to let you see changes</h6>
			</article>
		</main>
	)
}