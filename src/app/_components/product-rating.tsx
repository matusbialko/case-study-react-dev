import Image from "next/image"

type ProductRatingProps = {
	rating: {
		rate: number
		count: number
	}
}

export default function ProductRating({
	rating,
}: ProductRatingProps) {
  	const starsRating = Math.round(rating.rate)
	const ratingPercent = Math.floor(((rating.rate) / 5) * 100)

	return (
		<div className="flex flex-row gap-1 mt-2">
            <div className="flex flex-row gap-0.5">
                {[...Array(5)].map((_, index) => (
                    <div key={index}>
                        {index < starsRating ? 
                            <Image
                                src='/star-orange.svg'
                                alt='star-orange'
                                width={15}
                                height={15}
                            /> : 
                            <Image
                                src='/star-gray.svg'
                                alt='star-gray'
                                width={15}
                                height={15}
                            />
                        }
                    </div>
                ))}
            </div>
            <p className="font-bold text-xs text-[#959595]">
                <span>{ratingPercent}&nbsp;%</span>&nbsp;
                <span>({rating?.count})</span>
            </p>
        </div>
	)
}