import Image from "next/image"
import Link from "next/link"
import ProductRating from "./product-rating"

type ProductCardProps = {
	id: number,
	title: string
	image: string
	price: number
	rating: {
		rate: number
		count: number
	}
}

export default function ProductCard({
	id,
	title,
	image,
	price,
	rating,
}: ProductCardProps) {
	return (
		<Link href={`/products/${id}`} className="flex flex-col cols-span-1">
			<Image
				className="w-full aspect-square object-cover object-scale-down"
				src={image}
				alt={title}
				width={215}
				height={215}
			/>
			<div className="p-4">
				<p className="text-sm font-bold text-black overflow-hidden h-10">
					{title}
				</p>
				<ProductRating rating={rating}/>
				<p className="font-bold text-primary text-sm mt-1">€{price}</p>
			</div>
		</Link>
	)
}