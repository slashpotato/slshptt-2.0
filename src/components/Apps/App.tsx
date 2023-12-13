import Link from 'next/link'
import { Geologica } from 'next/font/google'
import Image from 'next/image';

const geologica = Geologica({ subsets: ['latin-ext', 'cyrillic-ext'], weight: "500" })
type target = '_blank' | '_parent' | '_self' | '_top'

export default function App({ name, icon, link, target }: { name: string, icon: any, link: string, target: target }) {
	if (icon == 'discord') {
		icon = <Image src={'/icons/discord-mark-white.svg'} alt={''} width={24} height={24} className='invert dark:invert-0 transition-all duration-600 delay-200' style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1);'}}/>
	}
	
	return (
		<li className="flex justify-between items-center text-lg hover:bg-stone-700 hover:bg-opacity-50 rounded-xl group py-1 px-2 transition-all duration-200 ease-in-out bg-origin-border">
			<Link target={target} href={link} className='flex justify-between items-center'><span className='material-symbols-rounded mr-1 scale-[.85]'>{icon}</span><span className={geologica.className}>{name}</span><Image src={'/icons/linkfat.svg'} alt={'arrow'} width={24} height={24} className='fixed right-[11px] text-stone-950 scale-0 group-hover:scale-[.75] overjump'/></Link>
		</li>
	)
}