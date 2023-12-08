import Link from 'next/link'
import { Geologica } from 'next/font/google'

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export default function App({ name, icon, link }: { name: string, icon: string, link: string }) {
	return (
		<li className="flex justify-between items-center text-lg mx-2 hover:bg-stone-700 rounded group">
			<Link href={link} className='flex justify-between items-center'><span className='material-symbols-rounded mr-1 scale-[.85]'>{icon}</span><span className={geologica.className}>{name}</span><span className='material-symbols-rounded fixed right-[8px] text-stone-900 scale-0 group-hover:scale-[.85] transition-all'>arrow_outward</span></Link>
		</li>
	)
}