import Image from "next/image"
import ProductRating from "@/app/_components/product-rating"

export type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
}

export default async function ProductDetail({ params }: {
    params: Promise<{
        id: number
    }>
}) {
    const paramsResponse = await params
    const id = paramsResponse.id
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!response.ok) {
        const errText = await response.text()
        console.error(errText)
    }
    const product: Product = await response.json()

    return (
        <div className="w-full flex flex-col md:flex-row items-center md:items-start">
            <Image
                className="w-full max-w-103 aspect-square object-cover object-scale-down m-10"
                src={product?.image}
                alt={product?.title}
                width={215}
                height={215}
            />
            <div className="flex flex-col gap-1.5">
                <h2 className="title-black">{product?.title}</h2>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-400 text-xs">{product?.category}</p>
                    <ProductRating rating={product?.rating} />
                </div>
                <p className="text-sm">{product?.description}</p>
                <p className="text-lg text-primary font-bold mt-1.5">€{product?.price}</p>
                <button className="btn-primary md:max-w-126 mt-1.5">BUY</button>
            </div>
        </div>
    )
}