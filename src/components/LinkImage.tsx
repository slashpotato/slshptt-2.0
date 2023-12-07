import Image from "next/image"

export default function LinkImage() {
	return (
		<Image alt='link' src={'/icons/link.svg'} width={18} height={18} className="invert mt-[1px]" />
	)
}