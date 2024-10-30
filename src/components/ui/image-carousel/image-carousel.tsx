'use client'

import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

interface Props {
	images?: string[]
}

export const ImageCarousel = ({ images }: Props) => {
	return (
		<Carousel>
			<CarouselContent>
				{images?.map((img) => (
					<CarouselItem
						key={`item-${img}`}
						className="flex items-center justify-center"
					>
						<Image
							src={img}
							alt={img}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: 'auto', height: 'auto', maxHeight: '70vh' }}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
