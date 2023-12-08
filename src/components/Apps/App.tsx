import Link from 'next/link'
import { Geologica } from 'next/font/google'
import Image from 'next/image';

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })

export default function App({ name, icon, link }: { name: string, icon: any, link: string }) {
	if (icon == 'discord') {
		icon = <Image src={'/icons/discord-mark-white.svg'} alt={''} width={24} height={24}/>
	}
	
	return (
		<li className="flex justify-between items-center text-lg mx-2 hover:bg-stone-700 hover:bg-opacity-50 rounded-xl group py-1 px-2 transition-all duration-200">
			<Link href={link} className='flex justify-between items-center'><span className='material-symbols-rounded mr-1 scale-[.85]'>{icon}</span><span className={geologica.className}>{name}</span><span className='material-symbols-rounded fixed right-[11px] text-stone-950 scale-0 group-hover:scale-[.85] transition-all duration-200'>arrow_outward</span></Link>
		</li>
	)
}