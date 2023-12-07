import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
	return (
		<main className="flex w-full justify-center items-center" id="settings-main-div">
			<article className="w-max h-max inline-flex flex-col justify-center items-center m-auto gap-4">
				<Link href='/images/cat-hides.jpg' target='_blank' className='cursor-pointer'><Image alt='cat-404' src={'/images/cat-hides.jpg'} width={500} height={500} className='rounded-3xl' style={{ ["pointer-events" as any]: "none" }}/></Link>
				<h2>Error 404: Not Found</h2>
				<Link href='/' className='text-blue-500'>Return Home</Link>
			</article>
		</main>
	)
}